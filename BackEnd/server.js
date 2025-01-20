import express from "express"; // add the "type": "module" in package to use this import 
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {});

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000")
})

