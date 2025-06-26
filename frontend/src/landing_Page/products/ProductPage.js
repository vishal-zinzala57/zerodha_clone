//It is inside the folder import
import React from 'react';
import Hero from './Hero';
import Left_Sec from './Left_Sec';
import Right_Sec from './Right_Sec';
import Universe from './Universe';

import './Product.css';
//it is outside the folder import
import Navbar from '../Navbar';
import Footer from '../Footer';



function ProductPage() {
    return (
        <>
            <Hero />
            <Left_Sec imgUrl="media/images/kite.png"
                ProductName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                trydemo="Try demo"
                learnmore="Learn more"
                googlePlay=""
                appStrore=""
            />
            <Right_Sec
                productName="Console"
                description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnmore=""
                imageUrl='media/images/console.png'
            />
            <Left_Sec imgUrl="media/images/coin.png"
                ProductName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                trydemo=""
                learnmore=""
                googlePlay=""
                appStrore=""
            />
            <Right_Sec
                productName="Kite Connect API"
                description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnmore=""
                imageUrl='media/images/kiteconnect1.svg'
            />
            <Left_Sec imgUrl="media/images/varsity.png"
                ProductName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                trydemo=""
                learnmore=""
                googlePlay=""
                appStrore=""
            />
            <p className='ptagproduct'>Want to know more about our technology stack? Check out the <a style={{ textDecoration: "none" }} href='#'>Zerodha.tech</a> blog.</p>

            <Universe />
        </>
    );
}

export default ProductPage;