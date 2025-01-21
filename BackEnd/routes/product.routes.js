import express from "express";

const router = express.Router();

router.app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({}); 
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.error("Error in fetching product:", error.message)
        res.status(500).json({success: false, message: "Server Error" }); // 500 status code if server error
    }
});

router.app.post("/api/products", async (req, res) => {
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

router.app.put("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: "Invalid product id"}); // 400 status code if client error
    }

    try {
    const updateProduct = await Product.findByIdAndUpdate(id, product, {new: true}); // new: true will return the updated product
    res.status(200).json({success: true, data: updateProduct});
    } catch (error) {
    res.status(500).json({success: false, message: "Server Error" }); // 500 status code if server error
    }
});

router.app.delete("/api/products/:id", async (req,res) => {
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

