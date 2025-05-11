const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const secretKey = "SECRET_KEY"; 

const generateJwt = (user) => {
  const payload = { username: user.username };
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.post("/admin/signup", (req, res) => {
  const admin = req.body;
  const existingAdmin = ADMINS.find((a) => a.username === admin.username);
  if (existingAdmin) {
    res.status(403).json({ message: "Admin already exists" });
  } else {
    ADMINS.push(admin);
    const token = generateJwt(admin);
    res.json({ message: "Admin created successfully", token });
  }
});

app.post("/admin/login", (req, res) => {
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );

  if (admin) {
    const token = generateJwt(admin);
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Admin authentication failed" });
  }
});

app.post("/admin/courses", authenticateJwt, (req, res) => {
  const course = req.body;
  course.id = COURSES.length + 1;
  COURSES.push(course);
  res.json({ message: "Course created successfully", courseId: course.id });
});

app.put("/admin/courses/:courseId", authenticateJwt, (req, res) => {
  const courseId = parseInt(req.params.courseId);

  const courseIndex = COURSES.findIndex((c) => c.id === courseId);

  if (courseIndex > -1) {
    const updatedCourse = { ...COURSES[courseIndex], ...req.body };
    COURSES[courseIndex] = updatedCourse;
    res.json({ message: "Course updated successfully" });
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.get("/admin/courses", authenticateJwt, (req, res) => {
  res.json({ courses: COURSES });
});

app.post("/users/signup", (req, res) => {
  const user = req.body;
  const existingUser = USERS.find((u) => u.username === user.username);
  if (existingUser) {
    res.status(403).json({ message: "User already exists" });
  } else {
    USERS.push(user);
    const token = generateJwt(user);
    res.json({ message: "User created successfully", token });
  }
});

app.post("/users/login", (req, res) => {
  const { username, password } = req.headers;
  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = generateJwt(user);
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "User authentication failed" });
  }
});

app.get("/users/courses", authenticateJwt, (req, res) => {
  res.json({ courses: COURSES });
});

app.post("/users/courses/:courseId", authenticateJwt, (req, res) => {
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find((c) => c.id === courseId);
  if (course) {
    const user = USERS.find((u) => u.username === req.user.username);
    if (user) {
      if (!user.purchasedCourses) {
        user.purchasedCourses = [];
      }
      user.purchasedCourses.push(course);
      res.json({ message: "Course purchased successfully" });
    } else {
      res.status(403).json({ message: "User not found" });
    }
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.get("/users/purchasedCourses", authenticateJwt, (req, res) => {
  const user = USERS.find((u) => u.username === req.user.username);
  if (user && user.purchasedCourses) {
    res.json({ purchasedCourses: user.purchasedCourses });
  } else {
    res.status(404).json({ message: "No courses purchased" });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});


// BELOW ARE THE CONTROLLERS AND FUNCTIONS CREATED FOR FIRST CHALLENGE :


function verifyUser(allUsers, username, password) {
  if (
    allUsers.find(
      (user) => user.username === username && user.password === password,
    )
  ) {
    return true;
  }
  return false;
}

function handleAdminSignUp(req, res) {
  const { username, password } = req.body;
  if (
    !username ||
    username === "undefined" ||
    password === "undefined" ||
    !password
  ) {
    return res
      .status(400)
      .json({ message: "Username and Password are required" });
  }
  if (admins.find((a) => a.username === username)) {
    return res.status(400).json({ message: "Admin Already Exists" });
  }
  const newAdmin = {
    id: uuidv4(),
    username: username,
    password: password,
  };
  admins.push(newAdmin);
  return res.status(201).json({ message: "Admin created successfully" });
}

function handleAdminLogin(req, res) {
  const { username, password } = req.headers;
  if (verifyUser(admins, username, password)) {
    currentClient = "ADMIN";
    return res.status(200).json({ message: "Admin logged in successfully" });
  } else {
    return res.status(400).json({ message: "Admin not found" });
  }
}


function handleCreateCourses(req, res) {
  const { username, password } = req.headers;
  if (!verifyUser(admins, username, password)) {
    return res.status(400).json({ message: "Admin not found" });
  }
  if (currentClient !== "ADMIN") {
    return res.status(400).json({ message: "You are not an admin" });
  }
  const { title, description, price, imageLink, published } = req.body;
  const newCourse = {
    id: uuidv4(),
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
    published: published,
  };
  courses.push(newCourse);
  return res
    .status(201)
    .json({ message: "Course created successfully", id: newCourse.id });
}


function handleEditCourse(req, res) {
  const { username, password } = req.headers;
  if (!verifyUser(admins, username, password)) {
    return res.status(400).json({ message: "Admin not found" });
  }
  if (currentClient !== "ADMIN") {
    res.status(400).json({ message: "You are not an admin" });
  }
  const id = req.params.courseId;
  const { title, description, price, imageLink, published } = req.body;
  const index = courses.findIndex((c) => c.id === id);
  courses[index] = {
    id: id,
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
    published: published,
  };
  return res.status(204).json({ message: "Course updated successfully" });
}


function handleAllCourses(req, res) {
  const { username, password } = req.headers;
  if (verifyUser(admins, username, password)) {
    if (courses.length <= 0) {
      return res.status(400).json({ message: "No courses found" });
    }
    return res.status(200).json({ courses: courses });
  }
  return res.status(400).json({ message: "Not Authorized" });
}

function handleUserSignUp(req, res) {
  const { username, password } = req.body;
  if (users.find((u) => u.username === username && u.password === password)) {
    return res.status(400).json({ message: "User already exists" });
  }
  const newUser = {
    id: uuidv4(),
    username: username,
    password: password,
    purchasedCourses: [],
  };
  users.push(newUser);
  return res.status(201).json({ message: "User created successfully" });
}

function handleUserLogin(req, res) {
  const { username, password } = req.headers;
  if (verifyUser(users, username, password)) {
    currentClient = "USER";
    return res.status(200).json({ message: "User logged in successfully" });
  }
  return res.status(400).json({ message: "User not found" });
}

function handleUserCourses(req, res) {
  const { username, password } = req.headers;
  if (verifyUser(users, username, password)) {
    if (courses.length <= 0) {
      return res.status(400).json({ message: "No courses found" });
    }
    return res.status(200).json({ courses: courses });
  }
  return res.status(400).json({ message: "Not Authorized" });
}

function handlePurchaseCourse(req, res) {
  const { username, password } = req.headers;
  const id = req.params.courseId;
  if (!verifyUser(users, username, password)) {
    return res.status(400).json({ message: "User not found" });
  }
  let index = users.findIndex(
    (c) => c.username === username && c.password === password,
  );
  let courseIndex = courses.findIndex((c) => c.id === id);
  users[index].purchasedCourses.push(courses[courseIndex]);
  return res.status(200).json({ message: "Course purchased successfully" });
}

function handleAllPurchaseCourse(req, res) {
  const { username, password } = req.headers;
  if (!verifyUser(users, username, password)) {
    return res.status(400).json({ message: "User not found" });
  }
  let index = users.findIndex(
    (c) => c.username === username && c.password === password,
  );
  return res
    .status(200)
    .json({ purchasedCourses: users[index].purchasedCourses });
}

module.exports = {
  handleAdminSignUp,
  handleAdminLogin,
  handleCreateCourses,
  handleEditCourse,
  handleAllCourses,
  handleUserSignUp,
  handleUserLogin,
  handleUserCourses,
  handlePurchaseCourse,
  handleAllPurchaseCourse,
};
