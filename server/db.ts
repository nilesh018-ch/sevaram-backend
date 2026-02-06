import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Root@12345",   // apna MySQL password
  database: "export_app", // ✅ SAME AS CREATED DB
  waitForConnections: true,
  connectionLimit: 10,
});

export async function initDB() {
  try {
    await db.query("SELECT 1");
    console.log("✅ MySQL Connected to masala_exporter");
  } catch (err) {
    console.error("❌ DB Error:", err);
    process.exit(1);
  }
}
