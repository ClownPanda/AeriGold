import React, { useState } from 'react';
import './Contact.css';
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) errs.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Email is invalid.';
    if (!formData.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' })); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>

    <NavBar/>
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>
        Have questions or need assistance? Reach out to our expert team. We're here to help!
      </p>

      {submitted ? (
        <div className="thank-you-message">
          <h3>Thank you for reaching out!</h3>
          <p>We will get back to you shortly.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'input-error' : ''}
          />
          {errors.message && <span className="error-msg">{errors.message}</span>}

          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      )}

      <div className="social-links">
        <h3>Connect with us</h3>
        <div className="icons">
          <a href="https://facebook.com/aerigoldelectricals" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/aerigold" target="_blank" rel="noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/company/aerigold-electricals" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:contact@aerigoldelectricals.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="map-container">
        <h3>Our Location</h3>
        <iframe
          title="Aerigold Electricals Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.6931629132723!2d72.85865199999999!3d19.409373799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a95abec118e9%3A0xc0c347a2db22396e!2sAERIGOLD%20ELECTRICALS!5e1!3m2!1sen!2sin!4v1748333644058!5m2!1sen!2sin" 
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
    <Footer/>

    </>
    
  );
};

export default Contact;
