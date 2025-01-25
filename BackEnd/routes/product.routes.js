import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/product.controller.js";


const router = express.Router();

router.get("/", getProducts);

router.get("/", async (req, res) => {
    try {
        const products = await Product.find({}); 
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.error("Error in fetching product:", error.message)
        res.status(500).json({success: false, message: "Server Error" }); // 500 status code if server error
    }
});

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);


export default router;

