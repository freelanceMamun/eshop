import express from "express";
import morgan from "morgan";
import cors from "cors";

import cookieParser from "cookie-parser";

import admin from "./routes/adminRoute.js";
import Router from "./routes/customerRouter.js";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(morgan("tiny"));
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "working was perfect" });
});

// user control route
// app.use("/api/v1/admin/", admin);
app.use("/api/v1/user", Router);

// ====== Global Error Handelr ============

export default app;
