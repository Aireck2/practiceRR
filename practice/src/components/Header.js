import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">PRACTICE</Link>
      </li>

      <li>
        <Link to="/productos">Add Productos</Link>
      </li>
    </ul>
  </nav>
);
export default Header;
