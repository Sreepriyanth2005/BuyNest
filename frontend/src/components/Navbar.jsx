import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">BuyNest</Link>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/cart" className="mx-2">Cart</Link>
        {user ? (
          <>
            <button onClick={handleLogout} className="mx-2">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mx-2">Login</Link>
            <Link to="/register" className="mx-2">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
