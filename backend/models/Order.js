import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ productId: String, quantity: Number }],
  totalPrice: Number,
  status: { type: String, default: "Pending" },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
