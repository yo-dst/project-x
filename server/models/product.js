import mongoose from "mongoose";

const Schema = mongoose.Schema;

const setPrice = (x) => {
    return x * 100;
}

const productSchema = new Schema({
    title: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    price: {
        type: Number,
        set: setPrice
    },
    style: String,
    description: String,
    imageFront: String,
    imageBack: String
});

const ProductModel = mongoose.model("product", productSchema);

export default ProductModel;