import React from 'react';

function Hero() {
    return (
        <section className='container-fluid support-hero'>
            <div className='container-hero'>
                <div id='support-title' className='pt-5'>
                    <h4 id='sup-h3'>Support Portal</h4>
                    <p className='border-bottom'><a id='sup-a' href=''>Track tickets</a></p>
                </div>
                <div className='row mt-4 pb-5'>
                    <div className='col-7'>
                        <h4>Search for an answer or browse help topics to create a ticket</h4>
                        <input type="text" class="form-control p-3 mt-4 mb-3" placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' />
                        <div className='super-links'>
                            <p className='border-bottom pb-1 quick-links'><a href=''>Track account opening</a></p>
                            <p className='border-bottom pb-1 quick-links'><a href=''> Track segment activationt</a></p>
                            <p className='border-bottom pb-1 quick-links'><a href=''>Intraday margins</a></p>
                            <p className='border-bottom pb-1 quick-links'><a href=''>Kite user manual</a></p>
                        </div>
                    </div>
                    <div className='col-5'>
                        <h4>Featured</h4>
                        <ol type='1'>
                            <li className='feature-li'><a href=''>Surveillance measure on scrips - June 2025</a></li>
                            <li className='feature-li'><a href=''>Rights Entitlements listing in June 2025</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;