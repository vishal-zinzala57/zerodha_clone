// src/components/ProtectedRoute.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {

    const [auth, setAuth] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3002/api/auth/profile", { withCredentials: true })
            .then((res) => {
                if (res.data && res.data.user) {
                    setAuth(true);
                } else {
                    setAuth(false);
                }
            })
            .catch((err) => setAuth(false))
    }, []);

    if (auth === null) return <p>Checking auth...</p>;
    if (!auth) return <Navigate to="/login" />;

    return children;
}

export default ProtectedRoute;