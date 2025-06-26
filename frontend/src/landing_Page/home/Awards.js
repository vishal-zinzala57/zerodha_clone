import React from 'react';

function Awards() {
    return (
        <div className='container px-5 mb-5 mt-5 '>
            <div className='row mb-5'>
                <div className='col-lg-6 col-sm-12'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <h1>Largest stock broker in india</h1>
                    <p className='award-p'>2+ million zerodha clients contribute to over 15% of all retail order volums in india daily by trading and investing in:</p>
                    <div className='row awards-row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Future and options</p>
                                </li>
                                <li>
                                    <p>Commodity derivates</p>
                                </li>
                                <li>
                                    <p>Currency derivates</p>
                                </li>
                            </ul>
                        </div>

                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks &#38; ipo's</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds &#38; Govt. Securities </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img className='press-img' src='media/images/pressLogos.png' alt='award-section images' />
                </div>
            </div>
        </div>
    );
}

export default Awards;
