import React from 'react';
import { Link } from 'react-router-dom';

function Left_Sec({ imgUrl, ProductName, productDescription, trydemo, learnmore, googlePlay, appStrore }) {
    return (

        <div className='container lef-con'>
            <div className='row'>
                <div className='col-7 d-flex justify-content-center'>
                    <img src={imgUrl} alt='product-kite' />
                </div>
                <div className='col-5 left-col-5'>
                    <h1 className='mt-5 left-h1'>{ProductName}</h1>
                    <p className='left-p'>
                       {productDescription}
                    </p>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <Link className='kite-links' to={trydemo}>Try demo &nbsp;<i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className='col-6'>
                            <Link className='kite-links' to={learnmore}>Learn more &nbsp;<i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                    </div>
                    {/* last images of kite components */}
                    <div className='kite-mobile-links'>
                        <a href={googlePlay}>
                            <img src='media/images/googlePlayBadge.svg' alt='playstore link' />
                        </a>
                        <a href={appStrore}>
                            <img src='media/images/appstoreBadge.svg' alt='app store link' />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Left_Sec;