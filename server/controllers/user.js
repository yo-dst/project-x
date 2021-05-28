import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/user.js";
import RefreshToken from "../models/refreshToken.js";

export const getUser = (req, res) => {
    User.findById(req.userId, (err, user) => {
        if (err)
            return res.status(500).send({success: false, message: "Internal server error."});
        if (!user)
            return res.status(404).send({success: false, message: "The user does not exist."});
        return res.status(200).send({success: true, message: "User infos sent.", user: user});
    });
};

export const login = (req, res) => {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err)
            return res.status(500).send({success: false, message: "Internal server error."});
        if (!user)
            return res.status(404).send({success: false, message: "The user does not exist."});

        var pwdIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!pwdIsValid)
            return res.status(401).send({success: false, message: "Incorrect password."});
        
        var accessToken = jwt.sign({id: user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30s"});
        var refreshToken = jwt.sign({id: user._id}, process.env.REFRESH_TOKEN_SECRET);

        res.cookie("refreshToken", refreshToken, {
            maxAge: 1000 * 60 * 60 * 1,
            httpOnly: true,
            secure: true,
            sameSite: "lax"
        });
        return res.status(200).send({
            success: true,
            message: "JWT sent.",
            accessToken: accessToken,
            accesshTokenExpiry: 5
        });
    });
};

export const register = (req, res) => {
    var hashedPwd = bcrypt.hashSync(req.body.password, 10);

    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPwd
    }, function(err, user) {
        if (err)
            return res.status(500).send({success: false, message: "Internal server error."});
        return res.status(200).send({success: true, message: "User created.\n" + user});
    });
};

export const logout = (req, res) => {
    res.cookie("refreshToken", "");
    return res.status(200).send();
};

export const verifyAccessToken = (req, res) => {
    accessToken = req.body.accessToken;

    if (!accessToken)
        return res.status(401).send({success: false, message: "accessToken is missing."});
    
}

export const refreshToken = (req, res) => {
    let refreshToken = req.cookies.refreshToken;

    if (!refreshToken)
        return res.status(401).send({success: false, message: "refreshToken is missing."});
    RefreshToken.findOneAndDelete({refreshToken: refreshToken}, (err, deletedRefreshToken) => {
        if (err)
            return res.status(500).send({success: false, message: "Internal server error."});
        if (!deletedRefreshToken)
            return res.status(401).send({success: false, message: "Invalid refreshToken."});

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err)
                return res.status(401).send({success: false, message: "Invalid refreshToken."});

            let newAccessToken = jwt.sign({id: user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30s"});
            let newRefreshToken = jwt.sign({id: user._id}, process.env.REFRESH_TOKEN_SECRET);

            res.cookie("refreshToken", refreshToken, {
                maxAge: 1000 * 60 * 60 * 1,
                httpOnly: true,
                secure: true,
                sameSite: "lax"
            });
            return res.status(200).send({success: true, accessToken: accessToken});
        });
    });
    /*
    RefreshToken.create({
        refreshToken: refreshToken
    }, function(err, user) {
        if (err)
            return res.status(500).send({success: false, message: "Internal server error."});
        return res.status(200).send({success: true, message: "refreshToken created."});
    });
    */
};