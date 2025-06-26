import React from 'react';
import { Link } from 'react-router-dom';

function Right_Sec({productName , description , learnmore , imageUrl}) {
    return (
        <div className='container right-con'>
            <div className='row'>
                <div className='col-4 right-col'>
                    <h1 className='right-h1'>{productName}</h1>
                    <p className='right-p'>
                        {description}
                    </p>
                     <Link className='kite-links' to={learnmore}>Learn more  &nbsp;<i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div className='col-8 sec-right-col'>
                    <img src={imageUrl} alt='product-kite' />
                </div>
            </div>
        </div>
    );
}

export default Right_Sec;