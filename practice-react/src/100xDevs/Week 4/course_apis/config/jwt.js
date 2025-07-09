import jwt from "jsonwebtoken";

export function generateJwtToken(userData) {
  const token = jwt.sign(
    {
      data: userData,
    },
    String(process.env.JWT_SECRET),
    { expiresIn: "1h" },
  );
  if (!token) {
    throw new Error(`Error generating JWT token: ${e.message}`);
  }
  return token;
}

export function verifyJwtToken(token) {
  try {
    return jwt.verify(token, String(process.env.JWT_SECRET));
  } catch (e) {
    throw new Error(`Error verifying JWT token: ${e.message}`);
  }
}
