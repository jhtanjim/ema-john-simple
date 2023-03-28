import React, { useEffect, useState } from 'react';

import Product from '../Producs/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducs] = useState([])
    const [cart, setCart] = useState([])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart)
    }
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducs(data))


    }, [])


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order summary</h4>
                <p>Selected Items : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;