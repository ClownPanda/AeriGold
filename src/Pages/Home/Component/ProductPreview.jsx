import React from 'react'
import switches from '../../../assets/switch.jpeg'
import dboard  from '../../../assets/Dboard.jpeg'
import plate from '../../../assets/modular.jpeg'

const ProductPreview = () => {
    const data = [
        {
            name: "Switches",
            img:switches
        },
        {
            name: "Distribution Boards",
            img:dboard
        },
        {
            name: "Ceiling Plates",
            img:plate
        },
    ]
    return (
        <>

            {/* Products Preview */}
            <section className="products-preview">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    {data.map((product) => (
                        <div key={product.name} className="product-card">
                        <img src={product.img} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>
                                High-quality {product.name.toLowerCase()} for modern electrical setups.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProductPreview