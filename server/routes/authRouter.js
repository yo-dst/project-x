import express  from "express";
import { login, signup, logout, refreshToken } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.delete("/logout", logout);
router.post("/refresh_token", refreshToken);
 
export default router;