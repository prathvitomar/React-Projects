import { Admin } from "../models/admin.schema.js";

export async function adminSignUp(req, res) {
  try {
    const { username, password } = req.body;
    const userExists = await Admin.findOne({ username });
    if (userExists)
      return res.status(409).json({ message: "User already exists" });
    const newUser = await Admin.create({ username, password });
    if (newUser)
      return res.status(201).json({
        message: `Admin by ${newUser.username} has been created successfully`,
        token: req.token,
      });
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function adminLogin(req, res) {
  try {
    const { username, password } = req.user;
    const user = await Admin.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json({ message: "User logged in successfully" });
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function adminAddCourses(req, res) {
  try {
    const { title, description, price, imageLink } = req.body;
    const courseExist = await Course.findOne({ title });
    if (courseExist)
      return res.status(409).json({ message: "Course already exists" });
    const newCourse = await Course.create({
      title,
      description,
      price,
      imageLink,
    });
    if (newCourse)
      return res.status(201).json({
        message: "Course created Successfully",
        courseId: newCourse._id,
      });
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function adminGetAllCourses(req, res) {
  try {
    const courses = await Course.find({});
    if (!courses) return res.status(404).json({ message: "No courses found" });
    return res.status(200).json({ courses: courses });
  } catch (e) {
    throw new Error(e.message);
  }
}
