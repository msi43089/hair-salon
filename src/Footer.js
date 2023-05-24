import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-menu">
          <ul className="footer-list">
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
              <Link to="/book">Reserve Here</Link>
            </li>
            <li>
              <Link to="/contact ">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>
            <a href="mailto:brondesociety@gmail.com">brondesociety@gmail.com</a>
          </p>

          <p>
            <a href="tel:+1(908)596-1342">908-596-1342</a>
          </p>
          <br />
          <p>Bronde Society Hair Co.</p>
          <p>16 Laird Street</p>
          <p>Long Branch, NJ 07740</p>
        </div>
      </div>
      <div className="icons">
        <div className="icon">
          <a
            href="https://www.instagram.com/brondesocietyhairco/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="copyright">
          <span>&#169;</span> Bronde Society Hair Co.
        </div>
        <div className="icon">
          <a
            href="https://www.facebook.com/BrondeSocietyHairCo/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </div>
  );
}
