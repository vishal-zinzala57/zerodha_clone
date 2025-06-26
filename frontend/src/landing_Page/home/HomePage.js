//these are inside the folder
import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

//It is outside to folder
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';


function HomePage() {
    return (
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default HomePage;