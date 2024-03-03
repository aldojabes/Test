import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/submit-form", (req, res) => {
  const { personalDetails, addressDetails, businessDetails, productDetails } =
    req.body;

  // Construct email message
  const emailMessage = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
          }
          h2 {
            color: #333;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 20px;
          }
          th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
        </style>
      </head>
      <body>
        <h2>Owner Details</h2>
        <table>
          ${Object.entries(personalDetails)
            .map(
              ([key, value]) => `
            <tr>
              <th>${key}</th>
              <td>${value}</td>
            </tr>
          `
            )
            .join("")}
        </table>

        <h2>Address Details</h2>
        <table>
          ${Object.entries(addressDetails)
            .map(
              ([key, value]) => `
            <tr>
              <th>${key}</th>
              <td>${value}</td>
            </tr>
          `
            )
            .join("")}
        </table>

        <h2>Business Details</h2>
        <table>
          ${Object.entries(businessDetails)
            .map(
              ([key, value]) => `
            <tr>
              <th>${key}</th>
              <td>${value}</td>
            </tr>
          `
            )
            .join("")}
        </table>

        <h2>Product Details</h2>
        <table>
          ${Object.entries(productDetails)
            .map(
              ([key, value]) => `
            <tr>
              <th>${key}</th>
              <td>${value}</td>
            </tr>
          `
            )
            .join("")}
        </table>
      </body>
    </html>
  `;

  console.log(emailMessage);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aldojabes@gmail.com",
      pass: "mmee mwru pquk noiw",
    },
  });

  const mailOptions = {
    from: "aldojabes@gmail.com",
    to: "burigoj2@gmail.com",
    subject: "Form Submission Details",
    html: emailMessage,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });

  res.sendStatus(200); // Respond to the client
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
