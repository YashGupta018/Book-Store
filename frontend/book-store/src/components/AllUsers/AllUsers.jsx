import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllUsers.css';

function AllUsers() {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                };
                const response = await axios.get('http://localhost:3000/api/users/all', { headers });
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error.message);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="all-users">
            <h2>All Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.isAdmin ? 'Admin' : 'User'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllUsers;
