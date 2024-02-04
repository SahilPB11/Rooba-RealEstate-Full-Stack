import jwt from "jsonwebtoken";
import ErrorHandler from "./ErrorHandler.js";

// Function to send a cookie with a JWT token and user information
const sendCookie = (res, user, statusCode = 201, message) => {
  try {
    // Generate a JWT token with the user's ID
    const token = jwt.sign({ _id: user._id }, process.env.jwt_Secret, {
      expiresIn: "20m",
    });

    // Extract sensitive information (like password) from user data
    const { password, ...userInfo } = user._doc;

    // Send the token as a cookie and user information in the response
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
        user: userInfo,
      });
  } catch (error) {
    // Log any errors during the token signing process
    console.error("Error signing JWT:", error);

    // Throw a custom error using ErrorHandler
    throw new ErrorHandler("Error signing JWT", 500);
  }
};

export default sendCookie;
