import http from "http";
import express from "express";
import "../config/mongo.js";
import dotenv from "dotenv";
import createHttpError from "http-errors";
import volunteer from "../routes/volunteer.js";
import helmet from "helmet";
import cors from "cors"
import { rateLimit } from "express-rate-limit";

dotenv.config();
const app = express();
app.use(cors());

const port = process.env.PORT;
app.set("port", port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(helmet());
const apiLimiter = rateLimit({
	windowMs: 5 * 60 * 1000,
	max: 40 || process.env.MAX_REQUESTS,
	standardHeaders: true,
	legacyHeaders: false,
    message: async (req,res, next)=>{
        createHttpError.TooManyRequests();
    }
});

app.get("/", (req, res, next) => {
    res.send({ status: true, message: "Server up and  running" });
});
app.use("/", apiLimiter, volunteer);

app.use(async (req, res, next) => {
    next(createHttpError.NotFound());
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.statusType || false,
        message: err.msg || "Internal Server Error",
        error: err.message || "Internal Server Error"
    });
})

const server = http.createServer(app);

server.listen(port);

server.on("listening", () => {
    console.log("Server up and  running");
});