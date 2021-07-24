import express  from "express";
import multer from "multer";
import path from "path";
import {v4 as uuidv4} from "uuid";

import {addProduct, getProducts, delProduct, updateProduct} from "../controllers/productsController.js";
import {authenticate} from "../middlewares/authenticate.js";

const router = express.Router();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/products");
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: fileStorageEngine});

router.get("/", getProducts);
router.post("/", authenticate, upload.single("imageFront"), addProduct);
router.delete("/:id", authenticate, delProduct);
router.put("/:id", authenticate, updateProduct);
 
export default router;