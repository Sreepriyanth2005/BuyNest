import { useProductContext } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { products } = useProductContext();
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
