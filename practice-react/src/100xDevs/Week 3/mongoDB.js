// BELOW ARE THE CONTROLLERS FOR WEEK 3 HARD CHALLENGE WITH JWT AND MONGODB : 




const { v4: uuidv4 } = require("uuid");
const { verifyUser } = require("../middlewares/auth-utils");
const { creatingToken, verifyToken } = require("../middlewares/jwt-auth");
const mongoose = require("mongoose");

// SCHEMAS
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

// MODELS
const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);

// HANDLERS

async function handleAdminSignUp(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and Password are required" });
    }

    const existedAdmin = await Admin.findOne({ username });
    if (existedAdmin) {
      return res.status(401).json({ message: "Admin Already Exists" });
    }

    const newAdmin = await Admin.create({ username, password });
    return res.status(201).json({
      message: "Admin created successfully",
      token: req.token,
    });

  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleAdminLogin(req, res) {
  try {
    const { username, password } = req.headers;
    const checkAdmin = await Admin.findOne({ username, password });

    if (checkAdmin) {
      return res.status(200).json({ message: "Login Successfully", token: req.token });
    }

    return res.status(400).json({ message: "Invalid Credentials" });

  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleCreateCourses(req, res) {
  const { title, description, price, imageLink, published } = req.body;

  if (!title || !description || !price || !imageLink) {
    return res.status(400).json({ message: "Provide all the details" });
  }

  try {
    const newCourse = await Course.create({ title, description, price, imageLink, published });
    return res.status(201).json({ message: "Course created successfully", id: newCourse.id });

  } catch (err) {
    return res.status(500).json({ message: "Unable to create Course. Internal Server Error!" });
  }
}

async function handleEditCourse(req, res) {
  const id = req.params.courseId;
  const { title, description, price, imageLink, published } = req.body;

  if (!title || !description || !price || !imageLink) {
    return res.status(400).json({ message: "Provide all the details" });
  }

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { title, description, price, imageLink, published },
      { new: true }
    );

    return res.status(201).json({ message: "Course updated successfully", id: updatedCourse.id });

  } catch (err) {
    return res.status(400).json({ message: "Invalid ID !! Course not Updated" });
  }
}

async function handleAllCourses(req, res) {
  try {
    const allCourses = await Course.find();
    if (allCourses.length > 0) {
      return res.status(200).json({ courses: allCourses });
    }
    return res.status(400).json({ message: "No courses found" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleUserSignUp(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and Password are required" });
    }

    const existedUser = await User.findOne({ username });
    if (existedUser) {
      return res.status(401).json({ message: "User Already Exists" });
    }

    const newUser = await User.create({ username, password });
    return res.status(201).json({
      message: "User created successfully",
      token: req.token,
    });

  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleUserLogin(req, res) {
  try {
    const { username, password } = req.headers;
    const checkUser = await User.findOne({ username, password });

    if (checkUser) {
      return res.status(200).json({ message: "Login Successfully", token: req.token });
    }

    return res.status(400).json({ message: "Invalid Credentials" });

  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handlePurchaseCourse(req, res) {
  const id = req.params.courseId;

  try {
    const user = await User.findOne({ username: req.user.username, password: req.user.password });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.purchasedCourses.includes(id)) {
      return res.status(400).json({ message: "Course already purchased" });
    }

    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    user.purchasedCourses.push(course._id);
    await user.save();

    return res.status(200).json({ message: "Course purchased successfully", id: course.id });

  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleAllPurchaseCourse(req, res) {
  try {
    const user = await User.findOne({
      username: req.user.username,
      password: req.user.password,
    }).populate("purchasedCourses");

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.purchasedCourses.length === 0) {
      return res.status(200).json({ message: "No courses purchased", purchasedCourses: [] });
    }

    return res.status(200).json({ purchasedCourses: user.purchasedCourses });

  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  handleAdminSignUp,
  handleAdminLogin,
  handleCreateCourses,
  handleEditCourse,
  handleAllCourses,
  handleUserSignUp,
  handleUserLogin,
  handlePurchaseCourse,
  handleAllPurchaseCourse,
};
