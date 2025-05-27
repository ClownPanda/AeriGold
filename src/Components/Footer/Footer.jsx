import React, { useEffect, useState } from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <hr className="footer-divider" />

      <div className="footer-content">
  {/* Logo */}
  <div className="footer-section logo-section">
    <img src={logo} alt="Aerigold Electricals Logo" />
  </div>

  {/* Quick Links */}
  <div className="footer-section links-section">
    <h4 style={{color:"#e42b2e", fontWeight:"bolder", fontSize:"18px"}}>Quick Links</h4>
    {/* <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/product">Products</a>
    <a href="/contact">Contact</a> */}
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/product'>Product</Link>
    <Link to='/contact'>Contact</Link>
  </div>

  {/* Address */}
  <div className="footer-section address-section">
    <h4 style={{color:"#e42b2e", fontWeight:"bolder", fontSize:"18px"}}>Address</h4>
    <p>
      UNIT No 101, 1st FLOOR,<br />
      KT SPARK BUILDING NO 3,<br />
      Golani Naka, Vasai-Virar (E),<br />
      Maharashtra 401208
    </p>
  </div>

  {/* Social + Contact */}
  <div className="footer-section socials-section">
    <h4 style={{color:"#e42b2e", fontWeight:"bolder", fontSize:"18px"}}>Follow Us</h4>
    <div className="social-icons">
      <a href="https://facebook.com/aerigoldelectricals" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com/aerigold" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://linkedin.com/company/aerigold-electricals" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="mailto:Admin@aerigolelectricals.com">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
    <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
    <p><strong>Email:</strong> <a href="mailto:Admin@aerigolelectricals.com">Admin@aerigolelectricals.com</a></p>
  </div>
</div>


        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aerigold Electricals LLP. All rights reserved.</p>
        </div>
      </footer>

      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default Footer;
