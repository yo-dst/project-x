import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/user.js";
import RefreshToken from "../models/refreshToken.js";

export const getUser = async (req, res) => {
    try {
        let user = await User.findById(req.userId);
        if (!user)
            return res.status(404).send({success: false, message: "The user does not exist."});
        return res.status(200).send({success: true, message: "User infos sent.", user: user});
    } catch (err) {
        return res.status(500).send({success: false, message: "Internal server error."});
    }
};

export const login = async (req, res) => {
    try {
        let user = await User.findOne({email: req.body.email});
        if (!user)
            return res.status(404).send({success: false, message: "The user does not exist."});
        let pwdIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!pwdIsValid)
            return res.status(401).send({success: false, message: "Incorrect password."});
        let accessToken = jwt.sign({id: user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30s"});
        let refreshToken = jwt.sign({id: user._id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"});
        res.cookie("refreshToken", refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: true,
            sameSite: "lax"
        });
        return res.status(200).send({
            success: true,
            message: "JWT sent.",
            accessToken: accessToken
        });
    } catch (err) {
        return res.status(500).send({success: false, message: "Internal server error."});
    }
};

export const signup = async (req, res) => {
    try {
        let hashedPwd = bcrypt.hashSync(req.body.password, 10);
        let user = await User.findOne({email: req.body.email})
        if (user)
            return res.status(403).send({success: false, message: "Email already used."});
        user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPwd
        });
        return res.status(200).send({success: true, message: "User created."});
    } catch (err) {
        return res.status(500).send({success: false, message: "Internal server error."});
    }
};

export const logout = async (req, res) => {
    try {
        await RefreshToken.findOneAndDelete({refreshToken: req.cookies.refreshToken});
        return res.status(200).send({success: true, message: "Successfully logged out."});
    } catch (err) {
        return res.status(500).send({success: false, message: "Internal server error."});
    }
};

export const refreshToken = (req, res) => {
    let refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
        return res.status(401).send({success: false, message: "refreshToken is missing."});
    RefreshToken.findOneAndDelete({refreshToken: refreshToken}, (err, refreshToken) => {
        if (err)
            return res.status(500).send({success: false, message: "Internal server error."});
        if (!refreshToken)
            return res.status(401).send({success: false, message: "Invalid refreshToken."});
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err)
                return res.status(401).send({success: false, message: "Invalid refreshToken."});
            let newAccessToken = jwt.sign({id: user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30s"});
            let newRefreshToken = jwt.sign({id: user._id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "7d"});
            RefreshToken.create({refreshToken: newRefreshToken}, (err, newRefreshToken) => {
                if (err)
                    return res.status(500).send({success: false, message: "Internal server error."});
                res.cookie("refreshToken", newRefreshToken, {
                    maxAge: 1000 * 60 * 60 * 24 * 7,
                    httpOnly: true,
                    secure: true,
                    sameSite: "lax"
                });
                return res.status(200).send({success: true, accessToken: newAccessToken});
            });
        });
    });
};