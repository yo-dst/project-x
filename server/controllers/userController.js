import UserModel from "../models/user.js";
import ProductModel from "../models/product.js";

export const fetchUser = async (req, res) => {
    try {
        let user = await UserModel.findById(req.userId);
        return res.status(200).send({user: user});
    } catch (err) {
        return res.status(500).send({msg: "Internal server error."});
    }
}

export const fetchUserProducts = async (req, res) => {
    try {
        let products = await ProductModel.find({creator: req.userId});
        return res.status(200).send({products: products});
    } catch (err) {
        return res.status(500).send({msg: "Internal server error."});
    }
}