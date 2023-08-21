import express from "express";
import getProduct from "../controllers/product/getProduct.js";
import postProduct from "../controllers/product/postProduct.js";
import updateProduct from "../controllers/product/updateProduct.js";
import deleteProduct from "../controllers/product/deleteProduct.js";


const productRouter = express.Router();


productRouter.get('/', getProduct);


productRouter.post('/', postProduct);


productRouter.put('/', updateProduct);


productRouter.delete('/', deleteProduct);

export default productRouter;