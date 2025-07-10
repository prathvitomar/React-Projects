import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import { connectToDatabase } from "./config/dbConnection.js";
import adminRouter from "./routes/admin.route.js";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Welcome to Course Selling App");
});

// Admin Routes
app.use("/admin", adminRouter);

// User Routes
app.use("/users", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  connectToDatabase();
  console.log(`Server running on http://localhost:${PORT}`);
});
