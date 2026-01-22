"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config"); // 👈 THIS IS THE KEY LINE
const mongoose_1 = __importDefault(require("mongoose"));
const Question_model_1 = require("../models/Question.model");
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is not defined in environment variables");
        }
        yield mongoose_1.default.connect(process.env.MONGO_URL);
        yield Question_model_1.QuestionModel.insertMany([
            {
                text: "What is M in MERN?",
                options: ["MongoDB", "MySQL", "MariaDB", "PostgreSQL"],
                correctIndex: 0,
                domain: "mern",
            },
            {
                text: "TypeScript is a superset of?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correctIndex: 2,
                domain: "typescript",
            },
        ]);
        console.log("✅ Questions seeded successfully");
        process.exit(0);
    });
}
seed().catch(err => {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
});
