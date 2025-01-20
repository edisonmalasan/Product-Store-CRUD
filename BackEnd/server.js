import express from "express"; // add the "type": "module" in package to use this import 
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000")
})

