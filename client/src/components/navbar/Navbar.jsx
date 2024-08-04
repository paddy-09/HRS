import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Hotels.com</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
           <Link to="/register"  style={{ color: "white" }} >
              Register
            </Link>
            <span> | </span>
            <Link to="/login"  style={{ color: "white" }} >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
