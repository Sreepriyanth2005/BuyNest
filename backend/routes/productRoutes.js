import express from "express";
import Product from "../models/Product.js";
import { protect, admin } from "../middleware/authMiddleware.js";


const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// Add new product (Admin only)
router.post("/", protect, admin, async (req, res) => {
    const { name, price, description, image, category, stock } = req.body;
    const product = new Product({ name, price, description, image, category, stock });
    await product.save();
    res.status(201).json(product);
});

export default router;
