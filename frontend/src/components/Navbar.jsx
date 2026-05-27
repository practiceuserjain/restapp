import { Link } from "react-router-dom";

function Navbar() {

  const login = localStorage.getItem("login");

  return (
    <nav className="bg-dark text-white p-3">

      {!login ? (
        <>
          <Link to="/" className="text-white me-3">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
        </>
      ) : (
        <>
          <Link to="/dashboard" className="text-white me-3">Dashboard</Link>
          <Link to="/" onClick={() => localStorage.removeItem("login")} className="text-white">Logout</Link>
        </>
      )}

    </nav>
  );
}

export default Navbar;
