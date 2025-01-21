import express from "express"; // add the "type": "module" in package to use this import 
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from ".routes/product.routes.js";

dotenv.config();

const app = express();

app.use(express.json()); // middleware that allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000")
}).on("error", (error) => {
    console.error("Error in starting server:", error.message);
    process.exit(1);
}); // process code 1 code means exit with failure, 0 means success


    