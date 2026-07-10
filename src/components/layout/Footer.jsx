import "./Footer.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail, MdAccessTime } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">
          <Logo bg={"black"} />

          <p className="footer-description">
            Crafting premium furniture for homes, offices, hotels, and
            restaurants across Ethiopia since 2012.
          </p>

          <div className="footer-socials">
            <span className="media-span">

            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>

          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-column">
          <h3 className="footer-title">Categories</h3>

          <ul className="footer-links">
            <li><Link to="/">Living Room</Link></li>
            <li><Link to="/">Bedroom</Link></li>
            <li><Link to="/">Dining Room</Link></li>
            <li><Link to="/">Office Furniture</Link></li>
            <li><Link to="/">Hotel & Restaurant</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3 className="footer-title">Contact</h3>

          <ul className="footer-contact">

            <li>
              <CiLocationOn className="footer-icon" />
              <span>Bole Road, Near Edna Mall, Addis Ababa</span>
            </li>

            <li>
              <IoCallOutline className="footer-icon" />
              <span>+251 911 234 567</span>
            </li>

            <li>
              <MdOutlineEmail className="footer-icon" />
              <span>hello@selamfurniture.et</span>
            </li>

            <li>
              <MdAccessTime className="footer-icon" />
              <span>Mon–Sat: 9AM–7PM</span>
            </li>

          </ul>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Selam Furniture. All rights reserved.
        </p>

        <div className="footer-credit">

          <p>
            Designed & Developed by{" "}
            <a
              href="https://abrocreative-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abol Creative
            </a>
          </p>

          <p>
            Lead Developer{" "}
            <a
              href="https://abrocreative-website.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yeabtsega Matewos
            </a>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;