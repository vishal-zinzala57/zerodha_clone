import React from 'react';
import './Homepage.css';
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homehero.png' alt='hero-image' className='mb-5' />
                <h1 className='mt-5 hero-h1'>Invest in everything</h1>
                <p className='hero-p mt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

                <Link to="/signup"><button className='btn btn-primary btn-sigin'>Sign up for free</button></Link>
            </div>
        </div>
    );
}

export default Hero;