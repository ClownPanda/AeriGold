import React from 'react'
import { Link } from 'react-router-dom'
import video from '../../../assets/hero.mp4'
const Hero = () => {
  return (
   <>
     <section className="hero">
         <video src={video} autoPlay loop muted className="hero-video">
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Welcome to <span style={{color:"#e42b2e"}}>Aeri</span>gold <span  style={{color:"#e42b2e"}}>Electricals</span></h1>
          <p>Your trusted partner in electrical solutions</p>
         <Link to='/contact' className="btn-primary">Get in Touch</Link>
        </div>
        </section>
   </>
  )
}

export default Hero