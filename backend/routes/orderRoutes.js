import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";

const router = express.Router();

router.post("/create", createOrder);
router.get("/all", getOrders);

export default router; // Ensure only one export
