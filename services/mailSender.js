import nodemailer from "nodemailer";
import { google } from "googleapis";
import dotenv from "dotenv"
dotenv.config();

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

export const mailSender = async (user, html) => {
    return new Promise(async (resolve, reject) =>{
        try {
            let accessToken = await oAuth2Client.getAccessToken();
            const mailTransporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: process.env.MAIL,
                    clientId: process.env.CLIENT_ID,
                    clientSecret: process.env.CLIENT_SECRET,
                    refreshToken: process.env.REFRESH_TOKEN,
                    accessToken: accessToken
                }
            })
            const mailOptions = {
                from: `🐯 HABBA 2024<${process.env.MAIL}>`,
                to: user.email,
                subject: "Volunteer Registration @ HABBA 2023",
                text: "Do not reply",
                html: html,
                // attachments: attachment&&[{
                //     filename: `APL8-${user.aplID.toString().padStart(4, "0")}-${user.name}.pdf`,
                //     content: pdfBuffer,
                //     contentType: 'application/pdf'
                // }],
            }
            const result = await mailTransporter.sendMail(mailOptions);
            resolve(result);
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}