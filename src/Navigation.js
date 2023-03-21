import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import logo from "./Assets/images/logo-mobile.png";

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  console.log(window.matchMedia("(max-width: 700px)"));

  return (
    <div>
      <nav>
        <div className="nav-collapse">
          <img src={logo} alt="Company Logo" />
          <div className="hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        <div className={isOpen ? "open" : "collapse"}>
          <ul>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Meet Jess</Link>
            </li>
            <li>
              <Link>Salon Etiquette</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Home</h1>
    </div>
  );
}
