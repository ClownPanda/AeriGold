import React from 'react';
import switches from '../../assets/switch.jpeg';
import dboard from '../../assets/Dboard.jpeg';
import plate from '../../assets/modular.jpeg';
import { Link } from 'react-router-dom';
import './ProductStyle.css';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';


const Product = () => {

const data = [
  {
    id: 1,
    name: 'Switches',
    img: switches,
    description: 'Premium switches for homes and businesses.',
  },
  {
    id: 2,
    name: 'Distribution Boards',
    img: dboard,
    description: 'Durable and safe distribution boards.',
  },
  {
    id: 3,
    name: 'Ceiling Plates',
    img: plate,
    description: 'Elegant ceiling plates for various installations.',
  },
];
  return (
    <>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

    <NavBar/>
   
     

      {/* Products Grid */}
        <section className="product-main">
      <h2>Our Products</h2>
      <p className="product-subheading">
        Explore a range of premium electrical products that ensure safety, durability, and sleek design for all your residential and commercial needs.
      </p>
      <div className="product-grid">
        {data.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`} className="view-more-btn">
              View More
            </Link>
          </div>
        ))}
      </div>
    </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Need Help With Your Electrical Needs?</h2>
        <p>Contact our expert team for reliable and efficient solutions.</p>
        <Link to="/contact" className="btn-primary">
          Contact Us
        </Link>
      </section>

      <Footer/>
    </>
  );
};

export default Product;
