import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://zerodha-clone-laf5.onrender.com/api/auth/login",
                { email, password },
                { withCredentials: true } // Keep this for cookie-based auth
            );
            window.location.href = 'https://zippy-concha-b090b0.netlify.app/';
        }
        catch (err) {
            console.log("the error is :", err);
            alert("Login failed");
        }
    }


    return (
        <form onSubmit={handleLogin}>
            <div className='container'>
                <h2 className='auth-h2'>Login Now</h2>
                <label htmlFor="email" className="form-label">Email</label>
                <input className='form-control' id='email' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="password" className="form-label mt-4">password</label>
                <input className='form-control' id='password' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div className='text-center'><button className='mb-5 btn btn-outline-success mt-5 btn-auth' type="submit">Login</button></div>
            </div>
        </form>
    );
}

export default Login;