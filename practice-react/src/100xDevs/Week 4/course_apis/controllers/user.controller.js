import { Course } from "../models/course.schema.js";
import { User } from "../models/user.schema.js";

export async function userSignUp(req, res) {
  try {
    const { username, password } = req.body;
    const userExist = await User.findOne({ username });
    if (userExist)
      return res.status(409).json({ message: "User already exists" });
    const newUser = await User.create({ username, password });
    if (newUser)
      return res
        .status(201)
        .json({ message: "User created successfully", token: req.token });
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function userLogin(req, res) {
  try {
    const { username } = req.body;
    const userExist = await User.findOne({ username });
    if (!userExist) return res.status(404).json({ message: "User not found" });
    return res.status(200).json({ message: "User logged in successfully" });
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function userAllCourses(req, res) {
  try {
    const courses = await Course.find({});
    if (!courses) return res.status(404).json({ message: "No courses found" });
    return res.status(200).json({ courses: courses });
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function userPurchaseCourseById(req, res) {
  try {
    const { username } = req.user;
    const courseId = req.params.courseId;
    const courseDetail = await Course.findById(courseId);
    if (courseDetail) {
      const purchasedCourse = await User.updateOne(
        { username },
        { $push: purchasedCourses },
      );
      if (purchasedCourse)
        return res
          .status(200)
          .json({
            message: "Course purchased successfully",
            courseId: courseId,
          });
      return res.status(404).json({ message: "Course Purchase Failed" });
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function userAllPurchasedCourses(req, res) {
  try {
    const { username } = req.user;
    const user = await User.findOne(username);
    if (user && user.purchasedCourses.length > 0) {
      return res.status(200).json({ purchasedCourses: user.purchasedCourses });
    }
    return res.status(404).json({ message: "No courses purchased" });
  } catch (e) {
    throw new Error(e.message);
  }
}
