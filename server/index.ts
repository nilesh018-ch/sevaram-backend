// 🔴 dotenv must be first
import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import { createServer } from "http";
import cors from "cors";
import { Server as SocketIOServer } from "socket.io";

import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { db } from "./db";

const app = express();
const httpServer = createServer(app);

// --------------------------------------------------
// 🔓 CORS (FRONTEND ACCESS)
// --------------------------------------------------
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// --------------------------------------------------
// 🔥 SOCKET.IO
// --------------------------------------------------
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.set("io", io);

io.on("connection", (socket) => {
  console.log("🟢 Admin connected:", socket.id);
  socket.on("disconnect", () => {
    console.log("🔴 Admin disconnected:", socket.id);
  });
});

// --------------------------------------------------
// BODY PARSERS
// --------------------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------------------------------------
// LOGGER
// --------------------------------------------------
function log(message: string, source = "express") {
  const time = new Date().toLocaleTimeString();
  console.log(`${time} [${source}] ${message}`);
}

// --------------------------------------------------
// REQUEST LOGGER
// --------------------------------------------------
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      log(`${req.method} ${path} ${res.statusCode} in ${duration}ms`);
    }
  });

  next();
});

// --------------------------------------------------
// MAIN BOOTSTRAP
// --------------------------------------------------
(async () => {
  try {
    await db.query("SELECT 1");
    log("Database connected successfully", "mysql");

    await registerRoutes(httpServer, app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      console.error("Internal Error:", err);
      res.status(500).json({ message: "Server Error" });
    });

    if (process.env.NODE_ENV === "production") {
      serveStatic(app);
    } else {
      const { setupVite } = await import("./vite");
      await setupVite(httpServer, app);
    }

    const port = Number(process.env.PORT) || 5000;
    httpServer.listen(port, () => {
      log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
})();
