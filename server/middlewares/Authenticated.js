import User from "../model/userModel.js";
import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Token not provided",
    });
  }

  try {
    const decodedData = jwt.verify(token, process.env.jwt_Secret);
    req.user = await User.findById(decodedData._id);
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid token",
    });
  }
};

export default isAuthenticated;
