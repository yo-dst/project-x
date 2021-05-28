import express  from "express";
import { login, register, getUser, logout, refreshToken } from "../controllers/user.js";
import { authenticateToken } from "../middlewares/authenticate.js";

const router = express.Router();

router.get("/", authenticateToken, getUser);
router.post("/login", login);
router.post("/register", register);
router.get("/logout", logout);
router.post("/refresh_token", refreshToken);
 
export default router;