import type { Express } from "express";
import type { Server } from "http";

export async function setupVite(server: Server, app: Express) {
  // 🔒 Production me Vite bilkul load nahi hoga
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  // ✅ Dynamic imports (ESM safe)
  const { createServer: createViteServer, createLogger } = await import("vite");
  const viteConfig = (await import("../vite.config.ts")).default;

  const fs = await import("fs/promises");
  const path = await import("path");
  const { nanoid } = await import("nanoid");

  const viteLogger = createLogger();

  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  // ✅ SPA fallback (React / Vite dev)
  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;

      const clientTemplate = path.resolve(
        process.cwd(),
        "client",
        "index.html",
      );

      let template = await fs.readFile(clientTemplate, "utf-8");

      template = template.replace(
        `/src/main.tsx`,
        `/src/main.tsx?v=${nanoid()}`,
      );

      const page = await vite.transformIndexHtml(url, template);

      res.status(200).setHeader("Content-Type", "text/html").end(page);
    } catch (err) {
      vite.ssrFixStacktrace(err as Error);
      next(err);
    }
  });
}
