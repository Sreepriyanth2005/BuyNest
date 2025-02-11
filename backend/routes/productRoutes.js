import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/", async (req, res) => {
  const { name, price, description, image } = req.body;
  const product = new Product({ name, price, description, image });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export default router;
