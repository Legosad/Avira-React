import express from "express";
import connectDB from "./config/db.js";

connectDB();


const app = express();
app.get("/", (req, res) => {
    res.send("API running")
})
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})