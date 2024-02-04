// Import necessary modules and utilities
import bcrypt from "bcrypt";
import sendCookie from "../utils/sendCookie.js";
import User from "../model/userModel.js"; // Import User model
import { isValidPassword } from "../utils/utility.js"; // Import utility function for password validation
import ErrorHandler from "../utils/ErrorHandler.js"; // Import custom error handler

// Controller function for creating a new user
export const createUser = async (req, res, next) => {
  try {
    const { name, email, age, country, password } = req.body;

    // Validate password before hashing
    if (!isValidPassword(password)) {
      throw new ErrorHandler(
        "Password must include at least one special character.",
        400
      );
    }

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new User instance
    const user = new User({
      name,
      email,
      age,
      country,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    // Respond with a success message
    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    next(error);
  }
};

// Controller function for user login
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user by email in the database
    const user = await User.findOne({ email });

    // Check if user exists and if the password is correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new ErrorHandler("Invalid email or password.", 401);
    }
    // Assuming sendCookie is a middleware for sending a cookie
    sendCookie(res, user, 200, `Welcome back ${user.name}`);
  } catch (error) {
    next(error);
  }
};
