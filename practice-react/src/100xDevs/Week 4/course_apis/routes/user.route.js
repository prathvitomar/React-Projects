import express from "express";
import { authenticateJwt, generateJwtToken } from "../config/jwt.js";
import {
  userSignUp,
  userLogin,
  userAllCourses,
  userPurchaseCourseById,
  userAllPurchasedCourses,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", generateJwtToken, userSignUp);
router.get("/login", authenticateJwt, userLogin);
router.post("/courses", authenticateJwt, userAllCourses);
router.get("/courses/:courseId", authenticateJwt, userPurchaseCourseById);
router.get(
  "/courses/purchasedCourses",
  authenticateJwt,
  userAllPurchasedCourses,
);

export default router;
