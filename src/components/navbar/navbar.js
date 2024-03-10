
import React, { useState } from "react";
import '../navbar/navbar.css';
import logo from "../../assets/logo.png";
function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
        <a href="#homePage"><img src={logo} alt="logo" className="logo"/></a>


      <ul className={active}>
        <li className="nav__item"><a href="#homePage" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#aboutPage" className="nav__link">About</a></li>
        <li className="nav__item"><a href="#servicePage" className="nav__link">Services</a></li>
        <li className="nav__item"><a href="#blogPage" className="nav__link">Blog</a></li>
        <li className="nav__item"><a href="#contactPage" className="nav__link">Contact</a></li>
        
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;