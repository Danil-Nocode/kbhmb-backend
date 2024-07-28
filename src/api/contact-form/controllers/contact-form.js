"use strict";

const { env } = require("@strapi/utils");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

module.exports = {
  async submit(ctx) {
    const { name, secondName, phoneNumber, message } = ctx.request.body;
    const { document } = ctx.request.files || {};
    // if (!name || !phoneNumber || !message) {
    //   strapi.log.error('Validation error: All fields are required');
    //   return ctx.badRequest('All fields are required');
    // }
    if (!name) {
      strapi.log.error("Validation error: Name field are required");
      return ctx.badRequest("Name fields are required");
    }

    let transporter = nodemailer.createTransport({
      host: env("SMTP_HOST"),
      port: env("SMTP_PORT"),
      secure: true, // SSL
      auth: {
        user: env("SMTP_USER"),
        pass: env("SMTP_PASS"),
      },
    });

    try {
      strapi.log.info("Starting to send email");

      let attachments = [];

      if (document) {
        const filePath = document.path;
        const fileContent = fs.readFileSync(filePath);

        attachments.push({
          filename: document.name,
          content: fileContent,
          contentType: document.type,
        });
      }

      let info = await transporter.sendMail({
        from: "ХМБ <nias.digital.company@gmail.com>",
        to: "nias.digital.company@gmail.com",
        subject: `Заявка от ${name}`,
        html: `<p style="font-size: 16px;"><strong>Имя:</strong> ${name}</p><p style="font-size: 16px;"><strong>Фамилия:</strong> ${secondName}</p><p style="font-size: 16px;"><strong>Номер телефона:</strong> ${phoneNumber}</p><p style="font-size: 16px;"><strong>Комментарий:</strong> ${message}</p>`,
        attachments: attachments,
      });

      strapi.log.info("Email sent successfully: %s", info.messageId);

      return ctx.send({ message: "Email sent successfully" });
    } catch (error) {
      strapi.log.error("Email sending error:", error);
      return ctx.internalServerError("Failed to send email");
    }
  },
};
