const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
require("dotenv").config();

const {SENDER_EMAIL, SENDER_PASSWORD} = process.env;

exports.sendEmailNotification = functions.firestore
    .document("contacts/{docId}")
    .onCreate(async (snapshot, context) => {
      const contactData = snapshot.data();

      const authData = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: SENDER_EMAIL,
          pass: SENDER_PASSWORD,
        },
      });

      try {
        await authData.sendMail({
          from: "dawnresort.elkaduwe@gmail.com",
          to: `${contactData.email}`,
          subject: "Thank you for contacting us!",
          html: "<p>We have received your message and will contact soon.</p>",
        });
        console.log("Successfully sent the email");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    });
