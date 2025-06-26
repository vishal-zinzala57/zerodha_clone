import React from 'react';
import '../landing_Page/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container nav-con-1 d-flex justify-content-between align-items-center py-2">

                {/* Logo */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img className="logo" src="media/images/logo.svg" alt="logo" />
                </Link>

                {/* Toggle button for mobile view */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about" >About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/products" >Products</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/pricing" >Pricing</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/support" >Support</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#" > <i className="fa-solid fa-bars"></i></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
