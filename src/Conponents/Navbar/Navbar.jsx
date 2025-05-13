import { useState , useEffect } from "react";
import  "../Navbar/Navbar.css"
import { motion } from "framer-motion";
import LanguageToggler from "../LanguageToggler/LanguageToggler";
import { FaRegBuilding } from "react-icons/fa";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <motion.nav className={`navbar ${isScrolled ? "scrolled" : ""}`}
                    initial={{y:-50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:.85, delay:0.5}}
        viewport={{once:true}}

        
    >
      {/* Logo */}
      <div className="logo">
         <FaRegBuilding style={{
          fontSize: "1.5rem",
          color: "#fff",
         }} /> 
        <span>ARCHIMED</span>
      </div>

      {/* Desktop Menu Items */}
      <ul className={`navLinks ${isMenuOpen ? "active" : ""}`}>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li>
          <button className="ctaButton">Sign Up</button>
        </li>
        <li className="toggler-li">
        <LanguageToggler></LanguageToggler>

        </li>
      </ul>

       <div className="language-toggler">  
      <LanguageToggler></LanguageToggler>
      </div>
      {/* Mobile Hamburger Menu */}
      <div className="mobileMenu" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;