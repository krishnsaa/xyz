import "reflect-metadata";
const express = require("express");
import { useExpressServer } from "routing-controllers";
import path from "path";
import { connectDB } from "./config/database";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


useExpressServer(app, {
  controllers: [path.join(__dirname, "controllers", "*.js")],
  middlewares: [path.join(__dirname, "middleware", "*.js")],
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});