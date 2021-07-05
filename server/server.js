import express  from "express";
import mongoose  from "mongoose";
import cors  from "cors";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
import config  from "./config.js";
import { corsOptions } from "./config.js";
import authRouter from "./routes/authRouter.js";
import { authenticate } from "./middlewares/authenticate.js"
import User from "./models/user.js";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));

//my middlewares -----------------------------------

//my routes -----------------------------------
app.get("/delCookie", (req, res) => {
    res.cookie("myCookie", "", {httpOnly: true});
    return res.status(200).send({msg: "cookie deleted."});
});

app.get("/createCookie", (req, res) => {
    res.cookie("myCookie", "888", {httpOnly: true});
    return res.status(200).send({msg: "cookie created."});
});

app.get("/getCookie", (req, res) => {
    let cookie = req.cookies.myCookie;
    if (cookie)
        return res.status(200).send({cookie: cookie});
    return res.status(200).send({msg: "No cookie."});
});

app.use("/auth", authRouter);
app.get("/user", authenticate, async (req, res) => {
    try {
        console.log(req.userId);
        let user = await User.findById(req.userId);
        console.log(user);
        if (!user)
            return res.status(404).send({success: false, message: "The user does not exist."});
        return res.status(200).send({success: true, message: "User infos sent.", user: user});
    } catch (err) {
        console.log(err);
        return res.status(500).send({success: false, message: "Internal server error."});
    }
});

/* errors handler
app.use((error, req, res, next) => {
    return res.status(error.statusCode).json({error: error.toString() + "\n" + error.message});
});
*/

mongoose.connect(config.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}) //avoiding warning in console
    .then(() => app.listen(config.port, () => console.log("Server running on port " + config.port)))
    .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false); //avoiding warning in console