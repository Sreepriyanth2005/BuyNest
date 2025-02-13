import { useState } from "react";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { addToCart } = useCart();
  const [products] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
  ]);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Products</h1>
      {products.map((product) => (
        <div key={product.id} className="border p-3 my-2">
          <h2>{product.name}</h2>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)} className="bg-blue-500 px-2 py-1 text-white">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
