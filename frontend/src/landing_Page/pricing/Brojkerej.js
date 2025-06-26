import React from 'react';

function Brojkerej() {
    return (
        <div className='container mb-5 border-top pt-5'>
            <div className='row'>
                <div className='col-8 p-4'>
                    <a className='a-tag-pricing' href='#'><h2 className='text-center'>Brokerage calculator</h2> </a>
                    <ul className='mt-5 pricing-ul text-muted'>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a className='a-tag-pricing' href='#'><h2>List of charges</h2>  </a>
                </div>
            </div>
        </div>
    );
}

export default Brojkerej;