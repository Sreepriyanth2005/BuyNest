import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const user = localStorage.getItem("user"); // Check login status
    if (!user) {
      navigate("/login"); // Redirect to login if not logged in
    } else {
      alert("Order placed successfully!");
      clearCart();
      navigate("/");
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Your Cart</h1>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="border p-3 my-2">
            <h2>{item.name}</h2>
            <p>₹{item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cart.length > 0 && (
        <button 
          onClick={handlePlaceOrder} 
          className="bg-green-500 px-2 py-1 text-white mt-3">
          Place Order
        </button>
      )}
    </div>
  );
};

export default Cart;
