import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import data from '../../data/data'
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';


const ProductDetails = () => {

    
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (

    <>
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

    <NavBar/>
<section className="product-detail-page">
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <div className="product-image-grid">
        {product.images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`${product.name} ${index + 1}`} />
        ))}
      </div>
    </section>
    <Footer/>
    </>
    
  );
};

export default ProductDetails;
