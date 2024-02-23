import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "white", color: "white" }}>
      <ul>
        <li>
          <div
            style={{
              color: "while",
              fontSize: "60px",
              display: "flex",
              justifyContent: "center",
              borderBottom: "2px solid black",
            }}>
            <Link to="/books">Books</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
