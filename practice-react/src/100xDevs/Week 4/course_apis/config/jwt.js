import jwt from "jsonwebtoken";

export function generateJwtToken(req, res, next) {
  const { username, password } = req.body;
  const token = jwt.sign(
    {
      data: {
        username: username,
        password: password,
      },
    },
    String(process.env.JWT_SECRET),
    { expiresIn: "1h" },
  );
  if (!token) {
    throw new Error(`Error generating JWT token: ${e.message}`);
  }
  req.token = token;
  return next();
}

export function verifyJwtToken(token) {
  try {
    return jwt.verify(token, String(process.env.JWT_SECRET));
  } catch (e) {
    throw new Error(`Error verifying JWT token: ${e.message}`);
  }
}

export function authenticateJwt(req, res, next) {
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
