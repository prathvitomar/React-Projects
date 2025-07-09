import express from "express";
import { connectToDatabase } from "./config/dbConnection.js";
import { verifyJwtToken } from "./config/jwt.js";

const app = express();

function authenticateJwt(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(403)
        .json({ message: "Authorization Header Not Available" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Token Not Available" });
    console.log(token);
    const userData = verifyJwtToken(token);
    req.user = userData;
    return next();
  } catch (e) {
    return res.status(403).json({
      message: "Not Authorized",
    });
  }
}

app.get("/", authenticateJwt, (req, res) => {
  return res.send("Welcome to Course Selling App");
});

app.listen(process.env.PORT || 3000, () => {
  connectToDatabase();
});
