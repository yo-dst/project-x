import mongoose from "mongoose";

const Schema = mongoose.Schema;

const refreshTokenSchema = new Schema({
    refreshToken: {
        type: String,
        required: true
    }
});

const   RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);

export default RefreshToken;