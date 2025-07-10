import express from "express";
import {
  adminSignUp,
  adminLogin,
  adminAddCourses,
  adminGetAllCourses,
} from "../controllers/admin.controller.js";
import { authenticateJwt, generateJwtToken } from "../config/jwt.js";

const router = express.Router();

router.post("/signup", generateJwtToken, adminSignUp);
router.get("/login", authenticateJwt, adminLogin);
router.post("/courses", authenticateJwt, adminAddCourses);
router.get("/courses", authenticateJwt, adminGetAllCourses);

export default router;
