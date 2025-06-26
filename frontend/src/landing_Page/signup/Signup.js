import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3002/api/auth/register', { email, password });
      alert("Registered! Now login.");
      navigate('/login');
    } catch (err) {
      alert("Error registering");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className='container'>
        <h2 className='auth-h2'>Sign up Now</h2>
        <label htmlFor="email" className="form-label">Email</label>
        <input className='form-control' id='email' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password" className="form-label mt-4">password</label>
        <input className='form-control' id='password' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <div className='text-center'><button className='mb-5 btn btn-outline-success mt-5 btn-auth' type="submit">Sign up</button></div>
      </div>
    </form>
  );
};

export default Signup;
