import React from 'react';
import './AboutStyles.css';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
// import aboutImage from '../../assets/about-image.jpg'; // replace with your actual about image path

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="about-page">
        <section className="about-hero">
          <h1>About Aerigold Electricals</h1>
          <p>
            We are dedicated to delivering the highest quality electrical solutions with innovation,
            reliability, and customer satisfaction at our core.
          </p>
        </section>

        <section className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              At Aerigold Electricals, our mission is to provide dependable electrical products
              and services that empower homes and businesses to run efficiently and safely.
            </p>

            <h2>Our Vision</h2>
            <p>
              We envision a world where cutting-edge electrical technology meets sustainable practices
              to create smarter, greener environments.
            </p>

            <h2>Our Values</h2>
            <ul>
              <li>Customer Satisfaction</li>
              <li>Quality & Innovation</li>
              <li>Integrity & Transparency</li>
              <li>Sustainability & Safety</li>
            </ul>
          </div>
          {/* <div className="about-image">
            <img src={aboutImage} alt="About Aerigold Electricals" />
          </div> */}
        </section>
      </main>
      <Footer />
    </>
  );
}
