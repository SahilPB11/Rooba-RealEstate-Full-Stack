// Import necessary modules and controllers
import express from "express";
import { createUser, loginUser, logout } from "../controllers/User.js";

// Create an instance of the Express router
const router = express.Router();

// Route for user signup
router.post("/signup", createUser);

// Route for user login
router.post("/login", loginUser);

// Route for user logout
router.get("/logout", logout);

// Export the router for use in other parts of the application
export default router;
