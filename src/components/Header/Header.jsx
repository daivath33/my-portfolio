import { Link, NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <p className="logo"> D</p>
      </Link>
      <nav>
        <NavLink to="/">
          <AiOutlineHome className="nav-icon" />
        </NavLink>
        <NavLink to="/">
          <FaGithub className="nav-icon" />
        </NavLink>
        <NavLink to="">
          <FaLinkedin className="nav-icon" />
        </NavLink>
        <NavLink to="">
          <FaWhatsapp className="nav-icon" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
