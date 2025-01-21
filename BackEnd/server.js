import express from "express"; // add the "type": "module" in package to use this import 
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.js";

dotenv.config();

const app = express();

app.use(express.json()); // middleware that allows us to accept JSON data in the req.body

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({}); 
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.error("Error in fetching product:", error.message)
        res.status(500).json({success: false, message: "Server Error" }); // 500 status code if server error
    }
});

app.post("/api/products", async (req, res) => {
    const product = req.body; // user will send this data to use it u need to use express.json

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields"}); // 400 status code if client error
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        return res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error("Error in creating product:", error.message)
        return res.status(500).json({success: false, message: "Server Error" }); // 500 status code if server error
    }
});


app.delete("/api/products/:id", async (req,res) => {
    const {id} = req.params
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    } catch (error) {
        console.error("Error in deleting product:", error.message)
        res.status(404).json({success: false, message: "Product not found"}); // 404 status code if not found
    }
});


app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000")
}).on("error", (error) => {
    console.error("Error in starting server:", error.message);
    process.exit(1);
}); // process code 1 code means exit with failure, 0 means success


    