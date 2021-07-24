import mongoose from "mongoose";

const Schema = mongoose.Schema;

const refreshTokenSchema = new Schema({
    token: {
        type: String,
        required: true
    }
});

const RefreshTokenModel = mongoose.model("refreshToken", refreshTokenSchema);

export default RefreshTokenModel;