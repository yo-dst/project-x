import express  from "express";
import mongoose  from "mongoose";
import cors  from "cors";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
import config  from "./config.js";
import { corsOptions } from "./config.js";
import authRouter from "./routes/authRouter.js";
import productsRouter from "./routes/productsRouter.js";
import userRouter from "./routes/userRouter.js";
import { authenticate } from "./middlewares/authenticate.js"
import UserModel from "./models/user.js";

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));

//my middlewares
app.use(express.static("public"));

// routers
app.use("/auth", authRouter);
app.use("/products", productsRouter);
app.use("/user", userRouter);

// routes
app.get("/", (req, res) => {
    return res.status(200).send("Server is working.");
})
app.get("/users", async (req, res) => {
    try {
        let users = await UserModel.find({});
        return res.status(200).send({users: users});
    } catch (err) {
        return res.status(500).send({msg: "Internal server error."});
    }
})
app.get("/cookies", (req, res) => {
    console.log("\nPrint Cookies");
    console.log(req.cookies);
    console.log("-----");
    return res.status(200).send();
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