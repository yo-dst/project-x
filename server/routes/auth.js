import express  from "express";
import { login, signup, getUser, logout, refreshToken } from "../controllers/authController.js";
import { authenticateToken } from "../middlewares/authenticate.js";

const router = express.Router();

router.get("/", authenticateToken, getUser);
router.post("/login", login);
router.post("/signup", signup);
router.delete("/logout", logout);
router.post("/refresh_token", refreshToken);
 
export default router;