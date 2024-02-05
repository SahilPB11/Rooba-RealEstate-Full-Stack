import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRoute.js";
import userStats from "./routes/userStat.js";
import cors from "cors";

// here i am exporting app to server.js file
export const app = express();

// config a env path
config({
  path: "./.env",
});

// Set CORS configuration based on environment variable
const url = process.env.cors_Url;
app.use(
  cors({
    credentials: true,
    origin: "https://rooba-real-estate-full-stack.vercel.app",
  })
);

// middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/user", userRouter);
app.use("/stats", userStats);
app.use("/", (req, res) => res.json("thanks for visiting here"));

// error handler middleware
app.use(errorMiddleware);
