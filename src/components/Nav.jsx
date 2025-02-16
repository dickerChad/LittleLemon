import { Link } from "react-router-dom";
// import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="nav-menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/reservations">Reservations</Link>
      <Link to="/order">Order Online</Link>
    </nav>
  );
}

export default Nav;
