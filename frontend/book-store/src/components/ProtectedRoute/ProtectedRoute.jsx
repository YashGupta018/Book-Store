import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = (props) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        if (!token) {
            console.log("No token found in localStorage.");
            setIsLoading(false);
            return;
        }

        axios.get('http://localhost:3000/api/users/verifyToken', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log("Token verification response:", response);
            setIsAuthorized(response.data.isAdmin);
        })
        .catch(error => {
            console.error("Error during token verification:", error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [token]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!token || !isAuthorized) {
        return <Navigate to="/login" replace />;
    }

    return props.children;
}

export default ProtectedRoute;

