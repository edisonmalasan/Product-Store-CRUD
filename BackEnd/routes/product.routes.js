import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";

import { createProduct, getProducts, updateProduct } from "../controller/product.controller.js";


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

router.delete("/:id", async (req,res) => {
    const {id} = req.params
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    } catch (error) {
        console.error("Error in deleting product:", error.message)
        res.status(404).json({success: false, message: "Product not found"}); // 404 status code if not found
    }
});


export default router;

