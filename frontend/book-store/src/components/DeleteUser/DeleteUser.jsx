import React, { useState } from 'react';
import axios from 'axios';
import './DeleteUser.css';

function DeleteUser() {
    const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('name');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('authToken');

    const fetchUser = async () => {
        try {
            let endpoint;
            if (searchType === 'name') {
                endpoint = `http://localhost:3000/api/users/search?name=${search}`;
            } else if (searchType === 'email') {
                endpoint = `http://localhost:3000/api/users/search?email=${search}`;
            }
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            const response = await axios.get(endpoint, { headers });
            
            console.log("Received user data from backend:", response.data);
            
            setUser(response.data);
        } catch (err) {
            setError("Error fetching user details");
        }
    };

    const handleDelete = async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
    
            console.log("Deleting user with ID:", user._id);
    
            await axios.delete(`http://localhost:3000/api/users/delete/${user._id}`, { headers });
            setUser(null);
        } catch (error) {
            console.error("Error deleting user:", error.response);
            setError("Error deleting user");
        }
    };    

    return (
        <div className="delete-user">
            <form className='container' onSubmit={(e) => { e.preventDefault(); fetchUser(); }}>
                <h3>Delete User</h3>

                {error && <div className="alert alert-danger">{error}</div>}

                <div className="mb-3">
                    <label>Search by</label>
                    <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                        <option value="name">Name</option>
                        <option value="email">Email Address</option>
                    </select>
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={searchType === 'name' ? "User Name" : "Email Address"}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Search User
                    </button>
                </div>
            </form>

            {user && (
                <div>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button onClick={handleDelete} className="btn btn-danger">
                        Delete User
                    </button>
                </div>
            )}
        </div>
    );
}

export default DeleteUser;
