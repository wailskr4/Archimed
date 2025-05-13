import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock 
} from 'react-icons/fa';
import { Link } from 'react-router';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Columns */}
        <div className="footer-grid">
          {/* About Column */}
          <motion.div 
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="footer-heading">About Archimed</h3>
            <p className="footer-about">
              Empowering professionals through cutting-edge technical education 
              since 2015. Our mission is to bridge the skills gap in the tech industry.
            </p>
            <div className="social-links">
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                aria-label="Facebook"
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                aria-label="Twitter"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -3 }}
                aria-label="Instagram"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/instructors">Instructors</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </motion.div>

          {/* Courses Column */}
          <motion.div 
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="footer-heading">Popular Courses</h3>
            <ul className="footer-links">
              <li><Link to="/courses/web-development">Web Development</Link></li>
              <li><Link to="/courses/ui-ux">UI/UX Design</Link></li>
              <li><Link to="/courses/data-science">Data Science</Link></li>
              <li><Link to="/courses/cybersecurity">Cybersecurity</Link></li>
              <li><Link to="/courses/mobile-dev">Mobile Development</Link></li>
              <li><Link to="/courses/cloud-computing">Cloud Computing</Link></li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div 
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Tech Park, Innovation City</span>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>info@archimed.edu</span>
              </li>
              <li>
                <FaClock className="contact-icon" />
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          className="copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; {currentYear} Archimed Institute. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;