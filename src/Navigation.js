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
          <Link to ="/">
            <img src={logo} alt="Company Logo"  />
          </Link>
          <div className="hamburger">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="full-menu">
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/jess">Meet Jess</Link>
              </li>
              <li>
                <Link to="/etiquette">Salon Policies</Link>
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
          <ul className="nav-list">
            <li>
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/jess" onClick={handleClick}>
                Meet Jess
              </Link>
            </li>
            <li>
              <Link to="/etiquette" onClick={handleClick}>
                Salon Policies
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
