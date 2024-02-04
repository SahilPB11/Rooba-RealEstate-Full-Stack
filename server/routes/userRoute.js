import express from "express";
import { createUser, loginUser, logout } from "../controllers/User.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/logout", logout);

export default router;
