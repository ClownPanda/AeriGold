import React from 'react'
import aboutImage from '../../../assets/aboutImage.jpg'

const AboutPreview = () => {
  return (
    <>
       <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
        Aerigold Electricals is your trusted partner for all your electrical needs. With a commitment to excellence and customer satisfaction, we offer a wide range of electrical services, including installation, maintenance, and repair. Our team of highly skilled technicians is dedicated to delivering top-notch solutions tailored to your specific requirements. Whether you need residential, commercial, or industrial electrical services, Aerigold Electricals is here to provide reliable, efficient, and safe solutions. With our expertise and attention to detail, you can trust us to deliver exceptional results every time. Choose Aerigold Electricals for all your electrical needs and experience the difference quality service makes.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Aerigold Electricals LLP" />
      </div>
    </section>
    </>
  )
}

export default AboutPreview