import express from "express";
import morgan from "morgan";
import cors from "cors";
import globalError from "./middleware/globalError.js";
import cookieParser from "cookie-parser";

import admin from "./routes/adminRoute.js";
import customer from "./routes/customerRouter.js";
const app = express();

app.use(globalError);

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
app.use("/api/user/", customer);
app.use("/api", admin);

// ====== Global Error Handelr ============

export default app;
