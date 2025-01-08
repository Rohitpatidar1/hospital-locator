import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Headddder">
      <nav>
        <div className="logo">Hospital Locator</div>{" "}
        <ul className="nav-links">
          {" "}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Locate">Locate Hospitals</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
