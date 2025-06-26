import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing_Page/home/HomePage';
import SignupPage from './landing_Page/signup/Signup';
import AboutPage from './landing_Page/about/AboutPage';
import ProductsPage from './landing_Page/products/ProductPage';
import PricingPage from './landing_Page/pricing/PricingPage';
import SupportPage from './landing_Page/support/SupportPage';
import Navbar from './landing_Page/Navbar';
import Footer from './landing_Page/Footer';
import NotFoundPage from './landing_Page/NotFound';
import LoginPage from './landing_Page/signup/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

