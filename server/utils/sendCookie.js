import jwt from "jsonwebtoken";
import ErrorHandler from "./ErrorHandler.js";
const sendCookie = (res, user, statusCode = 201, message) => {
  try {
    const token = jwt.sign({ _id: user._id }, process.env.jwt_Secret, {
      expiresIn: "20m",
    });

    return res
      .status(statusCode)
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 20 * 60 * 1000,
        sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "development" ? false : true,
      })
      .json({
        success: true,
        message: message,
        username: user.username,
        _id: user._id,
      });
  } catch (error) {
    console.error("Error signing JWT:", error);

    // Throw a custom error using ErrorHandler
    throw new ErrorHandler("Error signing JWT", 500);
  }
};

export default sendCookie;
