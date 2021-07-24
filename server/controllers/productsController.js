import ProductModel from "../models/product.js";

export const addProduct = async (req, res) => {
    try {
        let newProduct = await ProductModel.create({
            ...req.body,
            creator: req.userId,
            imageFront: req.file.filename
        });
        return res.status(200).send({newProduct: newProduct});
    } catch (err) {
        return res.status(500).send({msg: "Internal server error."});
    }
}

export const getProducts = async (req, res) => {
    try {
        let products = await ProductModel.find({});
        return res.status(200).send({products: products});
    } catch (err) {
        console.log(err);
        return res.status(500).send({msg: "Internal server error."});
    }
}

export const delProduct = async (req, res) => {
    try {
        let product = await ProductModel.findById(req.params.id);
        if (!product)
            return res.status(404).send({msg: "The product you trying to delete does not exist."});
        if (product.creator != req.userId)
            return res.status(403).send({msg: "You can't delete someone's else product."});
        await ProductModel.findByIdAndDelete(product._id);
        return res.status(200).send({deletedProduct: product});
    } catch (err) {
        console.log(err);
        return res.status(500).send({msg: "Internal server error."});
    }
}

export const updateProduct = async (req, res) => {
    try  {
        let product = await ProductModel.findById(req.params.id);
        if (!product)
            return res.status(404).send({msg: "The product you trying to update does not exist."});
        if (product.creator != req.userId)
            return res.status(403).send({msg: "You can't delete someone's else product."});
        let productUpdated = await ProductModel.findByIdAndUpdate(product._id, {...req.body}, {new: true});
        return res.status(200).send({productUpdated: productUpdated});
    } catch (err) {
        console.log(err);
        return res.status(500).send({msg: "Internal server error."});
    }
}