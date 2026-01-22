"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const routing_controllers_1 = require("routing-controllers");
const path_1 = __importDefault(require("path"));
const database_1 = require("./config/database");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
(0, database_1.connectDB)();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
(0, routing_controllers_1.useExpressServer)(app, {
    controllers: [path_1.default.join(__dirname, "controllers", "*.js")],
    middlewares: [path_1.default.join(__dirname, "middleware", "*.js")],
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("🚀 Server running on port", PORT);
});
