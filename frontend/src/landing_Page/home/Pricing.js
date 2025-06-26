import React from "react";

function Pricing() {
  return (
    <section className="pricing mb-5">
      <div className="container pri-con">
        <div className="row">
          <div className="col-5">
            <h1 className="price-h1 mb-3">Unbeatable pricing</h1>
            <p className="price-p">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
          </div>
          <div className="col-7 sec-pricing-col">
            <div className="pricing-box">
              <img src="media/images/pricing-eq.svg" alt="first price image" />
              <p>
                Free account <br />
                opening
              </p>
            </div>
            <div className="pricing-box">
              <img src="media/images/pricing-eq.svg" alt="second price image" />
              <p>
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>
            <div className="pricing-box">
              <img src="media/images/other-trades.svg" alt="third price image" />
              <p>
                Intraday and <br /> F&O
              </p>
            </div>
          </div>
        </div>
        <p className="price-link"><a href="#">See pricing &nbsp;<i className="fa-solid fa-arrow-right"></i></a></p>
      </div>
    </section>
  );
}

export default Pricing;
