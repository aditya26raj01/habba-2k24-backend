import request from "request";
import volunteer from "../models/volunteer.js";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";
import { mailSender } from "../services/mailSender.js";
import volunteerMailTemplate from "../mailTemplate/volunteerMailTemplate.js";

export const registerVolunteer = async (req, res, next) => {
    try {
        if (
            req.body.captcha === undefined ||
            req.body.captcha === '' ||
            req.body.captcha === null
        ) {
            throw createHttpError(400, 'Bad Request', { msg: "Captcha Not Verified, Try Again!" });
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw createHttpError(400, 'Bad Request', { msg: errors.array()[0].msg });
        }

        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.captcha}`;

        request(verifyUrl, async (err, response, body) => {
            try {
                body = JSON.parse(body);

                if (body.success !== undefined && !body.success) {
                    throw createHttpError(400, 'Bad Request', { msg: "Captcha Not Verified, Try Again!" });
                }

                const { email, name, auid, college, department, pref1, pref2, year, dob, whatsapp, call, exp, reason, gender } = req.body;

                if (!email.includes("@acharya.ac.in")) {
                    throw createHttpError(400, 'Bad Request', { msg: "Use Acharya Email ID Only!" });
                }

                let user = await volunteer.findOne({ email });
                if (user) {
                    throw createHttpError(409, 'Conflict', { msg: "Already Registered, Contact CPRD for any Changes" });
                }
                user = await volunteer.create({
                    email, auid, name, college, department, pref1, pref2, year, dob, whatsapp, call, exp, reason, gender
                });
                await mailSender(user, volunteerMailTemplate(user));
                res.send({ success: true, message: "Registration Successfull, Check Mail" });
            } catch (error) {
                next(error);
            }
        });
    } catch (error) {
        next(error);
    }
};