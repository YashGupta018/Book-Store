import React, { useState } from 'react';
import axios from 'axios';
import './UpdateUserRole.css';

function UpdateUserRole() {
    const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('name');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('authToken');

    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/users/search?${searchType}=${search}`);
            setUser(response.data);
        } catch (err) {
            setError("Error fetching user details");
        }
    };

    const handleRoleUpdate = async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            const response = await axios.put(`http://localhost:3000/api/users/role/${user._id}`, { isAdmin: !user.isAdmin }, { headers });
            setUser(response.data);
        } catch (error) {
            setError("Error updating user role");
        }
    };

    return (
        <div className="update-user-role">
            <form className='container' onSubmit={(e) => { e.preventDefault(); fetchUser(); }}>
                <h3>Search User</h3>

                {error && <div className="alert alert-danger">{error}</div>}

                <div className="mb-3">
                    <label>Search by</label>
                    <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="form-control">
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                    </select>
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={searchType === 'name' ? "User Name" : "User Email"}
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
                <div className='container'>
                    <h3>Update User Role</h3>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.isAdmin ? 'Admin' : 'User'}</p>
                    <div className="d-grid">
                        <button onClick={handleRoleUpdate} className="btn btn-primary">
                            {user.isAdmin ? 'Downgrade to User' : 'Upgrade to Admin'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UpdateUserRole;
