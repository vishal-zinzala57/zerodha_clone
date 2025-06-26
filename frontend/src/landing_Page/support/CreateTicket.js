import React from 'react';
import './Support.css';

function CreateTicket() {
    return (
        <div className='container create-container px-5'>
            <p className='text-muted fs-5 mt-5'>To create a ticket, select a relevant topic</p>
            <div className='row px-5 mt-5 mb-5'>
                <div className='col-4 tic-col p-4'>
                    <h3 className='mb-3'><a href=''><i class="fa-solid fa-circle-plus"></i> Account Opening</a></h3>
                    <span><a href=''>Resident individual</a></span>
                    <span><a href=''>Minor</a></span>
                    <span><a href=''>Non Resident Indian (NRI)</a></span>
                    <span><a href=''>Company, Partnership, HUF and LLP</a></span>
                    <span><a href=''>Glossary</a></span>

                </div>
                <div className='col-4 tic-col p-4'>
                    <h3 className='mb-3'><a href=''><i class="fa-regular fa-user"></i> Account Opening</a></h3>
                    <span><a href=''>Your Profile</a></span>
                    <span><a href=''>Account modification</a></span>
                    <span><a href=''>Client Master Report (CMR) and Depository <br/> Participant (DP)</a></span>
                    <span><a href=''>Nomination</a></span>
                    <span><a href=''>Transfer and conversion of securities</a></span>
                </div>
                <div className='col-4 tic-col p-4'>
                    <h3 className='mb-3'><a href=''><i class="fa-solid fa-chart-simple"></i> Account Opening</a></h3>
                    <span><a href=''>IPO</a></span>
                    <span><a href=''>Trading FAQs</a></span>
                    <span><a href=''>Margin Trading Facility (MTF) and Margins</a></span>
                    <span><a href=''>Charts and orders</a></span>
                    <span><a href=''>Alerts and Nudges</a></span>
                    <span><a href=''>General</a></span>
                </div>
                
            </div>
              <div className='row px-5 mt-5 mb-5'>
                <div className='col-4 tic-col p-4'>
                    <h3 className='mb-3'><a href=''><i class="fa-regular fa-credit-card"></i> Funds</a></h3>
                    <span><a href=''>Add money</a></span>
                    <span><a href=''>Withdraw money</a></span>
                    <span><a href=''>Add bank accounts</a></span>
                    <span><a href=''>eMandates</a></span>

                </div>
                <div className='col-4 tic-col p-4'>
                    <h3 className='mb-3'><a href=''><i class="fa-solid fa-bowling-ball"></i> Console</a></h3>
                    <span><a href=''>Portfolio</a></span>
                    <span><a href=''>Corporate actions</a></span>
                    <span><a href=''>Funds statement</a></span>
                    <span><a href=''>Reports</a></span>
                    <span><a href=''>Profile</a></span>
                    <span><a href=''>Segments</a></span>
                </div>
                <div className='col-4 tic-col p-4'>
                    <h3 className='mb-3'><a href=''><i class="fa-solid fa-coins"></i> Coin</a></h3>
                    <span><a href=''>Mutual funds</a></span>
                    <span><a href=''>National Pension Scheme (NPS)</a></span>
                    <span><a href=''>Features on Coin</a></span>
                    <span><a href=''>Payments and Orders</a></span>
                    <span><a href=''>General</a></span>
                </div>
                
            </div>
        </div>
    );
}




export default CreateTicket;