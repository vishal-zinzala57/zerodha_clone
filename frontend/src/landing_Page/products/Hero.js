import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Hero() {
    return (
        <div className='container pro-container border-bottom'>
            <div className='row text-center product-row'>
                <h1>Zerodha Products</h1>
                <p className='fs-5'>Sleek, modern, and intuitive trading platforms</p>
                <p className='fs-6'>Check out our <a href='#' style={{ textDecoration: "none" }}>investment offerings →</a></p>
            </div>
        </div>
    );
}

export default Hero;