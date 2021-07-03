import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const accessToken = authHeader && authHeader.split(" ")[1]; // undefined if there is no authHeader
    if (!accessToken) {
        return res.status(401).send({success: false, message: "JWT is missing."});
    }
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err)
            return res.status(403).send({success: false, message: "JWT is not valid."});
        req.userId = payload.id;
        next();
    });
};
