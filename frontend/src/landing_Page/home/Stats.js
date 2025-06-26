import React from "react";
import "./Homepage.css";

function Stats() {
  return (
    <div className="container stats-con">
      <div className="row">
        <div className="col-5">
          <h1 className="stat-h1">Trust with confidence</h1>
          <div className="text-container">
            <h3>Customer-first always</h3>
            <p>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
            <h3>No spam or gimmicks</h3>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
            <h3>The Zerodha universe</h3>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h3>Do better with money</h3>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-7">
          <img
            className="stats-image"
            src="media/images/ecosystem.png"
            alt="stats image"
          />
          <div className="links-inStats">
            <a href="#">Explore our products &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
            <a href="#">Try kite demo &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
