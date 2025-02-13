import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext"; // Import Product Provider

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [admin, setAdmin] = useState(localStorage.getItem("admin") || null);

  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Navbar user={user} setUser={setUser} admin={admin} setAdmin={setAdmin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin-login" element={<AdminLogin setAdmin={setAdmin} />} />
            <Route path="/admin-dashboard" element={admin ? <AdminDashboard /> : <Navigate to="/admin-login" />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
