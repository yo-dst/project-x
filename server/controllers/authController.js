import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserModel from "../models/user.js";
import RefreshTokenModel from "../models/refreshToken.js";

export const login = async (req, res) => {
    try {
        let user = await UserModel.findOne({email: req.body.email});
        if (!user)
            return res.status(404).send({msg: "The user does not exist."});
        let pwdIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!pwdIsValid)
            return res.status(401).send({msg: "Incorrect password."});

        //HERE DELETE ANCIEN ACCESS TOKEN S'IL
        
        let accessToken = jwt.sign({id: user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1m"});
        let refreshToken = jwt.sign({id: user._id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"});
        await RefreshTokenModel.create({token: refreshToken});
        res.cookie("refreshToken", refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: true,
            sameSite: "strict"
        });
        return res.status(200).send({msg: "JWT sent.", accessToken: accessToken});
    } catch (err) {
        console.log(err);
        return res.status(500).send({msg: "Internal server error."});
    }
};

export const signup = async (req, res) => {
    try {
        let hashedPwd = bcrypt.hashSync(req.body.password, 10);
        let user = await UserModel.findOne({email: req.body.email})
        if (user)
            return res.status(403).send({msg: "Email already used."});
        await UserModel.create({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPwd
        });
        return res.status(200).send({msg: "User created."});
    } catch (err) {
        return res.status(500).send({msg: "Internal server error."});
    }
};

export const logout = async (req, res) => {
    try {
        await RefreshTokenModel.findOneAndDelete({token: req.cookies.refreshToken});
        return res.status(200).send();
    } catch (err) {
        return res.status(500).send({msg: "Internal server error."});
    }
};

export const refreshToken = async (req, res) => {
    try {
        let refreshToken = req.cookies.refreshToken;
        let refreshTokenSaved = await RefreshTokenModel.findOneAndDelete({token: refreshToken});
        if (!refreshTokenSaved)
            return res.status(403).send({msg: "Invalid refreshToken."});
        jwt.verify(refreshTokenSaved.token, process.env.REFRESH_TOKEN_SECRET, async (err, payload) => {
            if (err)
                return res.status(403).send({msg: "Invalid refreshToken."});
            let newAccessToken = jwt.sign({id: payload.id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1m"});
            let newRefreshToken = jwt.sign({id: payload.id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"});
            await RefreshTokenModel.create({token: newRefreshToken});
            res.cookie("refreshToken", newRefreshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
                secure: true,
                sameSite: "strict"
            });
            return res.status(200).send({accessToken: newAccessToken});
        });
    } catch (err) {
        return res.status(500).send({msg: "Internal server error."});
    }
}
