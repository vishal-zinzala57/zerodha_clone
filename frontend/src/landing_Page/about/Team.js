import React from 'react';
import './About.css';

function Team() {
    return (
        <div className='container Team-container mt-5 pb-5 pt-5 mb-5'>
            <div className='row team-row'>
                <h2 className='text-center mb-5 pb-4'>People</h2>
                <div className='col-5 col-md-5 col-sm-12 fist-col'>
                    <img className='author' src='media/images/nithinKamath.jpg' alt='Nithin Kamath' />
                    <h5 className='mt-4'>Nithin Kamath</h5>
                    <p className='px-0 mt-2 text-muted'>Founder, CEO</p>
                </div>
                <div className='col-7 col-md-7 mt-2 col-sm-12 text-muted sec-col'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='#'>Homepage</a> / <a href='#'>TradingQnA</a> / <a href='#'>Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;