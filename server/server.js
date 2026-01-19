import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { GoogleSpreadsheet } from "google-spreadsheet";
import creds from "./credentials.json" assert { type: "json" };

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Replace with your Google Sheet ID
const doc = new GoogleSpreadsheet("1S6CtZ9-2MClMkU0nJBNRkg66aaWxrUWfkyLdYt9NVC8");

// Connect to the sheet
async function accessSheet() {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  return doc.sheetsByIndex[0]; // first sheet
}

// API endpoint for inquiries
app.post("/api/inquiry", async (req, res) => {
  try {
    const sheet = await accessSheet();
    const data = req.body;

    await sheet.addRow({
      "Full Name": data.fullName,
      "Mobile No": data.mobileNo,
      "WhatsApp No": data.whatsappNo,
      "Email": data.email,
      "Product Name": data.productName,
      "Quantity": data.quantity,
      "Country": data.country,
      "Brand": data.brand,
      "Lab Test": data.labTest,
      "Certificate": data.certificate,
      "Target Price": data.targetPrice,
      "HSN Code": data.hsnCode,
      "Payment Terms": data.paymentTerms,
      "Additional Requirements": data.additionalRequirements,
      "Timestamp": new Date().toLocaleString(),
    });

    res.status(200).json({ message: "Inquiry submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving inquiry" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
