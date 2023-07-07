import express from "express";
import { body } from "express-validator";
import { registerVolunteer } from "../controllers/volunteer.js";

const router = express.Router();

const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;

router.post(
    "/register-volunteer",
    [
        body("name", "Enter a Valid Name").notEmpty().trim().toUpperCase(),
        body("email", "Enter a Valid Acharya Email").trim().isEmail().normalizeEmail().toLowerCase(),
        body("auid", "Enter a Valid AUID").notEmpty().trim().isAlphanumeric().toUpperCase(),
        body("college", "Enter a Valid College").notEmpty().trim(),
        body("department", "Enter a Valid Department").notEmpty().trim(),
        body("pref1", "Enter Appropiate Preference").notEmpty().trim(),
        body("pref2", "Enter Appropiate Preference").notEmpty().trim(),
        body("year", "Enter a Valid Year").notEmpty(),
        body("dob", "Enter a Valid DOB").notEmpty().isDate(),
        body("whatsapp", "Enter a Valid WhatsApp Number").notEmpty().trim().matches(phoneRegex),
        body("call", "Enter a Valid Call Number").notEmpty().trim().matches(phoneRegex),
        body("exp", "Enter Appropiate Experience").notEmpty().trim().isLength(5),
        body("reason", "Enter Appropiate Reason").notEmpty().trim().isLength(5),
        body("gender", "Enter Appropiate Reason").notEmpty().trim().notEmpty(),
    ],
    registerVolunteer
);

export default router;