import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const Schema = mongoose.Schema;

const nanoid = customAlphabet('1234567890', 4);

const volunteer = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => nanoid(),
        index: { unique: true },
    },    
    email:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    auid:{
        type: String,
        required: true
    },
    college:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    pref1:{
        type: String,
        required: true
    },
    pref2:{
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    whatsapp:{
        type: String,
        required: true
    },
    call:{
        type: String,
        required: true
    },
    exp:{
        type: String,
        required: true
    },
    reason:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    verified:{
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model("volunteer",volunteer);