import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import cors from "cors";
import serverless from "serverless-http";

import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import notesRouter from "./routes/notes.js";
import categoryRouter from "./routes/categories.js";
import tagsRouter from "./routes/tags.js";

console.log("starting server console log");

dotenv.config();
connectDB();

console.log("test1");

const app = express();
app.get("/", (req, res) => {
  res.send("starting server");
});
console.log("test2");
app.use(express.json());
console.log("test3");
app.use(cors());
console.log("test4");

app.use("/uploads", express.static("uploads"));
console.log("test5");

app.use("/api", authRouter);
app.use("/api", usersRouter);
app.use("/api", notesRouter);
app.use("/api", categoryRouter);
app.use("/api", tagsRouter);
console.log("test6");

app.get("/", (req, res) => {
  res.send("Hello from Express with vercel!");
});
console.log("test7");

export default serverless(app);
