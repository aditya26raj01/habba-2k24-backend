import dotenv from "dotenv";

dotenv.config();

const config = {
    db: {
        name: process.env.DB_NAME,
        uri: process.env.DB_URI,
    }
};

export default config;