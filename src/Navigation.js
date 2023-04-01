import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import logo from "./Assets/images/logo-mobile.png";

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  console.log(isOpen);

  function handleClick() {
    setOpen(false);
  }

  return (
    <div>
      <nav>
        <div className="nav-collapse">
          <img src={logo} alt="Company Logo" />
          <div className="hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="full-menu">
            <ul>
              <li>
                <Link to="/jess">Meet Jess</Link>
              </li>
              <li>
                <Link to="/etiquette">Salon Etiquette</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/book">Book</Link>
              </li>
              <li>
                <Link to="/contact ">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={isOpen ? "open" : "collapse"}>
          <ul>
            <li>
              <Link to="/jess" onClick={handleClick}>
                Meet Jess
              </Link>
            </li>
            <li>
              <Link to="/etiquette" onClick={handleClick}>
                Salon Etiquette
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={handleClick}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/book" onClick={handleClick}>
                Book
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
