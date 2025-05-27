// HomePage.jsx
import React from "react";
import './HomeStyles.css'
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Hero from "./Component/Hero";
import AboutPreview from "./Component/AboutPreview";
import ProductPreview from "./Component/ProductPreview";
import Footer from "../../Components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero/>
      <AboutPreview/>
      <ProductPreview/>
      <section className="cta-section">
              <h2>Need Help With Your Electrical Needs?</h2>
              <p>Contact our expert team for reliable and efficient solutions.</p>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </section>
      <Footer/>
      <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

    </>
  );
}