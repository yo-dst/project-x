import express from "express";
import { getTest } from "../controllers/test.js";

const   test = express.Router();

test.get("/", getTest);

export default test;