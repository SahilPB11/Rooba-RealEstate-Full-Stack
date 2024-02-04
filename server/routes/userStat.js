// Import necessary modules and middleware
import express from "express";
import { getUserStats } from "../controllers/userStats.js";
import isAuthenticated from "../middlewares/Authenticated.js";

// Create an instance of the Express router
const router = express();

// Define a route for fetching user statistics, requiring authentication
router.get("/", isAuthenticated, getUserStats);

// Export the router for use in other parts of the application
export default router;
