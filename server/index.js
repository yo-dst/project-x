import express  from "express";
import mongoose  from "mongoose";
import cors  from "cors";
import config  from "./config.js";
import testRouter from "./routes/test.js";

const app = express();

app.use(express.json({ extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", testRouter);

mongoose.connect(config.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}) //avoiding warning in console
    .then(() => app.listen(config.port, () => console.log("Server running on port " + config.port)))
    .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false); //avoiding warning in console