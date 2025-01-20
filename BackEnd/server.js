import express from "express"; // add the "type": "module" in package to use this import 

const app = express();

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000")
})