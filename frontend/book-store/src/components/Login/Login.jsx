// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:3000/api/users/login', {
//                 email: email,
//                 password: password
//             });

//             if (response.data.token) {
//                 localStorage.setItem('authToken', response.data.token);
//                 // Here you can redirect or do something else upon successful login

//                 // Check if user is admin
//                 if (response.data.isAdmin) {
//                     // Redirect to AdminDashboard if user is an admin
//                     navigate('/admin');
//                 } else {
//                     // Redirect to WelcomePage for non-admin users
//                     navigate('/');
//                 }

//             }
//         } catch (error) {
//             console.error('Error logging in:', error);
//             // Handle error, show error message to user if needed
//         }
//     };

//     return (
//         <form className='container' onSubmit={handleSubmit}>
//             <h3>Sign In</h3>
//             <div className="mb-3">
//                 <label>Email address</label>
//                 <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label>Password</label>
//                 <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Enter password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <div className="mb-3">
//                 <div className="custom-control custom-checkbox" id='check'>
//                     <input
//                         type="checkbox"
//                         className="custom-control-input"
//                         id="customCheck1"
//                     />
//                     <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                 </div>
//             </div>
//             <div className="d-grid">
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </div>
//             <br />
//             <p className="text-right">
//                 Don't have an account? <a href="/register">Sign up</a>
//             </p>
//         </form>
//     );
// }

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:3000/api/users/login', {
//                 email: email,
//                 password: password
//             });

//             if (response.data.token) {
//                 localStorage.setItem('authToken', response.data.token);
//                 // Redirect based on the isAdmin value received from backend
//                 navigate(response.data.redirectPath);
//             }
//         } catch (error) {
//             console.error('Error logging in:', error);
//             // Handle error, show error message to user if needed
//         }
//     };

//     // ... rest of the code remains unchanged ...

//     return (
//         <form className='container' onSubmit={handleSubmit}>
//             <h3>Sign In</h3>
//             <div className="mb-3">
//                 <label>Email address</label>
//                 <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label>Password</label>
//                 <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Enter password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <div className="mb-3">
//                 <div className="custom-control custom-checkbox" id='check'>
//                     <input
//                         type="checkbox"
//                         className="custom-control-input"
//                         id="customCheck1"
//                     />
//                     <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
//                 </div>
//             </div>
//             <div className="d-grid">
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </div>
//             <br />
//             <p className="text-right">
//                 Don't have an account? <a href="/register">Sign up</a>
//             </p>
//         </form>
//     );
// }

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/users/login', {
                email: email,
                password: password
            });

            // if (response.data.token) {
            //     localStorage.setItem('authToken', response.data.token);
                
            //     console.log("Attempting to navigate to:", response.data.redirectPath);
            //     navigate(response.data.redirectPath);
            // }

            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
                const pathToRedirect = response.data.redirectPath || '/';
                console.log("Attempting to navigate to:", pathToRedirect);
                navigate(pathToRedirect);
            }            

        } catch (error) {
            console.error('Error logging in:', error);
            // Handle error, show error message to user if needed
        }
    };

    return (
        <form className='container' onSubmit={handleSubmit}>
            <h3>Sign In</h3>
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
            <div className="mb-3">
                <div className="custom-control custom-checkbox" id='check'>
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            <br />
            <p className="text-right">
                Don't have an account? <a href="/register">Sign up</a>
            </p>
        </form>
    );
}

export default Login;
