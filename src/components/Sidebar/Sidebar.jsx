import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="right-links">
      <NavLink to="/projects">Projects</NavLink>

      <NavLink to="/info">Info</NavLink>

      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default Sidebar;
