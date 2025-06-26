import React from 'react';
import "./Homepage.css";

function Education() {
    return (
        <div className='container education-container'>
            <div className='row mb-5'>
                <div className='col-6'>
                    <img src='media/images/education.svg' alt='education image' />
                </div>
                <div className='col-6'>
                    <h1 className='edu-h1'>Free and open market education</h1>
                    <p className='edu-p'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <p className='edu-links'><a href='#'>varsity &nbsp;<i className="fa-solid fa-arrow-right"></i></a></p>
                    <p className='edu-p'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <p className='edu-links'><a href='#'>TrandingQ&A &nbsp;<i className="fa-solid fa-arrow-right"></i></a></p>
                </div>
            </div>
        </div>

    );
}

export default Education;