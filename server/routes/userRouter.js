import express from "express";

import {authenticate} from "../middlewares/authenticate.js";
import {fetchUser, fetchUserProducts} from "../controllers/userController.js";

const router = express.Router();

router.get("/", authenticate, fetchUser);
router.get("/products", authenticate, fetchUserProducts);

export default router;