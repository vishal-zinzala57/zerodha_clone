import React from 'react';
import './Product.css';

function Universe() {
    return (
        <div className='container uni-con'>
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='row universe-row mt-5 text-center text-muted'>
                <div className='col-4'>
                    <img src="media/images/zerodhaFundhouse.png" alt='smallcase' />
                    <p className='text-small'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-4'>
                    <img src="media/images/sensibullLogo.svg" alt='smallcase' />
                    <p>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.

                    </p>
                </div>
                <div className='col-4'>
                    <img src="media/images/tijori.svg" alt='smallcase' />
                    <p>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
                <div className='col-4 mt-5'>
                    <img src="media/images/streakLogo.png" alt='smallcase' />
                    <p>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className='col-4 mt-5'>
                    <img src="media/images/smallcaseLogo.png" alt='smallcase' />
                    <p>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className='col-4 mt-5'>
                    <img src="media/images/dittoLogo.png" alt='smallcase' />
                    <p>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>
            </div>
            <button className='mb-5 mt-5 btn btn-primary btn-sigin'>Sign up for free</button>
        </div>
    );
}

export default Universe;