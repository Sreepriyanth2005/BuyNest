import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser, admin, setAdmin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("admin");
    setAdmin(null);
    navigate("/admin-login");
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>

      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}

      {admin ? (
        <>
          <Link to="/admin-dashboard">Admin Panel</Link>
          <button onClick={handleAdminLogout}>Admin Logout</button>
        </>
      ) : (
        <Link to="/admin-login">Admin Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
