import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

export const authenticate = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const accessToken = authHeader && authHeader.split(" ")[1]; // undefined if there is no authHeader
    if (accessToken === "null") {
        return res.status(401).send({msg: "JWT is missing."});
    }
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err)
            return res.status(401).send({msg: "JWT is not valid."});
        UserModel.findById(payload.id, (err, user) => {
            if (err)
                return res.status(500).send({msg: "Internal server error."});
            if (!user)
                return res.status(404).send({msg: "The user does not exist."});
        });
        req.userId = payload.id;
        next();
    });
};
