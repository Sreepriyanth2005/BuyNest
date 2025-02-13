import { useState } from "react";
import { useProductContext } from "../context/ProductContext";

const AdminDashboard = () => {
  const { products, setProducts } = useProductContext();
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const addProduct = () => {
    if (newProduct.name && newProduct.price) {
      const updatedProducts = [...products, { id: Date.now(), ...newProduct }];
      setProducts(updatedProducts);
      setNewProduct({ name: "", price: "" });
    }
  };

  const updateProduct = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, price: prompt("New Price", product.price) } : product
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <button onClick={addProduct}>Add Product</button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => updateProduct(product.id)}>Update</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
