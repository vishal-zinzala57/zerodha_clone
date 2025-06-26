import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row pricing-row text-center'>
                <h1 className='pricing-h1'>Charges</h1>
                <p className='text-muted fs-5 mt-2'>List of all charges and taxes</p>
            </div>

            <div className='row sec-price-row text-center'>
                <div className='col-4'>
                   <img src="media/images/pricing-eq.svg" alt="price image" /> 
                   <h1 className='h1-sec-price'>Free equity delivery</h1>
                   <p className='p-sec-pricing'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                     <img src="media/images/other-trades.svg" alt="price image" />
                     <h1 className='h1-sec-price'>Intraday and F&O trades</h1>
                     <p className='p-sec-pricing'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img src="media/images/pricing-eq.svg" alt="price image" /> 
                    <h1 className='h1-sec-price'>Free direct MF</h1>
                    <p className='p-sec-pricing'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;