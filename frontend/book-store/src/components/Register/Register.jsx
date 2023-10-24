import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/users/register', {
                name: name,
                email: email,
                password: password
            });

            if (response.data.success) {
                console.log('Registered successfully');
                navigate('/login');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMessage(error.response.data.message || 'Error during registration.');
        }
    };

    return (
        <form className='container' onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            <div className="mb-3">
                <label>Full name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>
            <br />
            <p className="forgot-password text-right">
                Already registered? <a href="/login">Sign in</a>
            </p>
        </form>
    );
}

export default Register;
