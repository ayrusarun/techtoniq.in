import React from 'react'
import "./footer.css";
import logo from "../../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer_area'>
     <div className='footer'>
      
     <div className='footer_menu'>
      <a href="#homePage"><img src={logo} alt="logo" className="logo"/></a>
      <br />
        <ul>
        <li className="nav__item"><a href="#homePage" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#aboutPage" className="nav__link">About</a></li>
        <li className="nav__item"><a href="#servicePage" className="nav__link">Services</a></li>
        <li className="nav__item"><a href="#blogPage" className="nav__link">Blog</a></li>
        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
       
        </ul>
      </div>
      <div className='footer_contact'>
           <div className="contact">
            <h4><MdEmail/> Email</h4>
            <h3>contact@techtoniq.in</h3>
           </div>

           <div className="contact">
            <h4><IoLogoWhatsapp/> Whatsapp</h4>
            <h3>+91 8940882711</h3>
           </div>
      </div>

      <div className='social_links'>
        <ul>
            <li><a href="#twitter.com"><FaXTwitter/>Twitter</a></li>
            <li><a href="#twitter.com"><FaLinkedin/>Linkedin</a></li>
            <li><a href="#twitter.com"><FaFacebookSquare/>Facebook</a></li>
            <li><a href="#twitter.com"><FaSquareInstagram/>Instagram</a></li>
        </ul>
      </div>
     </div>
     <p className='rights'>
     Copyright © 2024 techtoniq.in All rights reserved.
Privacy Policy

     </p>
    </div>
  )
}

export default Footer
