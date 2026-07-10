import { NavLink } from "react-router-dom"
import Button from "../Button"

import "./NavBar.css"
import Logo from "./Logo"
import { useState } from "react"
import { LuMenu, LuX } from "react-icons/lu";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Logo />
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <LuX /> : <LuMenu />}
      </button>
      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul>
          <li>
            <NavLink 
              to="/"
              onClick={() => setMenuOpen(false)}
            >Home</NavLink>
          </li>
          <li>
            <NavLink 
              to="/products"
              onClick={() => setMenuOpen(false)}
            >Products</NavLink>
          </li>
          <li>
            <NavLink 
              to="/gallery"
              onClick={() => setMenuOpen(false)}
            >Gallery</NavLink>
          </li>
          <li>
            <NavLink  
              to="/about"
              onClick={() => setMenuOpen(false)}
            >About</NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Button className={"nav-btn"} variant={"primary"}>Get a Quote</Button>
    </header>
  )
}

export default NavBar