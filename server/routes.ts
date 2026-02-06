import type { Express } from "express";
import type { Server } from "http";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import { db } from "./db";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


export async function registerRoutes(
  _httpServer: Server,
  app: Express
): Promise<Server> {

  // ====================================
  // 🔐 GOOGLE AUTH
  // ====================================
  app.post("/api/auth/google", async (req, res) => {
    try {
      const { token } = req.body;
      if (!token) return res.status(400).json({ message: "Token missing" });

      const ticket = await googleClient.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      if (!payload?.email) return res.status(401).json({ message: "Invalid Google account" });

      const allowedAdmins =
        process.env.ALLOWED_ADMINS?.split(",").map(e => e.trim()) || [];

      const isAdmin = allowedAdmins.includes(payload.email);

      const jwtToken = jwt.sign(
        { email: payload.email, role: isAdmin ? "admin" : "user" },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" }
      );

      res.json({ success: true, token: jwtToken, role: isAdmin ? "admin" : "user" });
    } catch (err) {
      console.error("Google Auth Error:", err);
      res.status(401).json({ message: "Google auth failed" });
    }
  });

  // ====================================
  // 📝 SAVE INQUIRY + 🔴 LIVE UPDATE
  // ====================================
  app.post("/api/inquiry", async (req, res) => {
    try {
      const i = req.body;

      // Insert inquiry in database
      const [result]: any = await db.query(
        `INSERT INTO inquiries
        (fullName, mobileNo, whatsappNo, email, productName, quantity, country, brand, labTest, certificate, targetPrice, hsnCode, paymentTerms, additionalRequirements, status, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', NOW())`,
        [
          i.fullName,
          i.mobileNo,
          i.whatsappNo,
          i.email,
          i.productName,
          i.quantity,
          i.country,
          i.brand,
          i.labTest,
          i.certificate,
          i.targetPrice,
          i.hsnCode,
          i.paymentTerms,
          i.additionalRequirements,
        ]
      );

      // Fetch the saved inquiry
      const [rows]: any = await db.query(
        "SELECT * FROM inquiries WHERE id=?",
        [result.insertId]
      );

      // 🔴 LIVE SOCKET.IO UPDATE
      const io = app.get("io");
      io.emit("new-inquiry", rows[0]);

      res.json({ success: true, inquiry: rows[0] });
    } catch (error) {
      console.error("Inquiry Save Error:", error);
      res.status(500).json({ success: false });
    }
  });

  // ====================================
  // 📊 ADMIN – GET ALL INQUIRIES
  // ====================================
  app.get("/api/admin/inquiries", async (_req, res) => {
    try {
      const [rows] = await db.query(
        "SELECT * FROM inquiries ORDER BY created_at DESC"
      );
      res.json(rows);
    } catch (err) {
      console.error("Fetch error:", err);
      res.status(500).json({ message: "Failed" });
    }
  });

  // ===============================
  // ✅ ACCEPT INQUIRY
  // ===============================
  app.post("/api/admin/inquiry/:id/accept", async (req, res) => {
    try {
      const { id } = req.params;

      await db.query(
        "UPDATE inquiries SET status='accepted' WHERE id=?",
        [id]
      );

      const [rows]: any = await db.query(
        "SELECT * FROM inquiries WHERE id=?",
        [id]
      );

      // 🔴 LIVE STATUS UPDATE
      const io = app.get("io");
      io.emit("update-inquiry", rows[0]);

      res.json({ success: true });
    } catch (err) {
      console.error("Accept Inquiry Error:", err);
      res.status(500).json({ success: false });
    }
  });

  // ===============================
  // ❌ REJECT INQUIRY
  // ===============================
  app.post("/api/admin/inquiry/:id/reject", async (req, res) => {
    try {
      const { id } = req.params;

      await db.query(
        "UPDATE inquiries SET status='rejected' WHERE id=?",
        [id]
      );

      const [rows]: any = await db.query(
        "SELECT * FROM inquiries WHERE id=?",
        [id]
      );

      // 🔴 LIVE STATUS UPDATE
      const io = app.get("io");
      io.emit("update-inquiry", rows[0]);

      res.json({ success: true });
    } catch (err) {
      console.error("Reject Inquiry Error:", err);
      res.status(500).json({ success: false });
    }
  });

  return _httpServer;
}
