import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import path from "path";
import {connectDB} from "./config/database";
import cors from "cors";
const express = require("express");
connectDB();
const app = createExpressServer({
  controllers: [path.join(__dirname, "controllers", "*.js")],
  middlewares: [path.join(__dirname, "middleware", "*.js")],
  cors: true,
});
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});