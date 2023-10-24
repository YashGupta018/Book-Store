// // // // // import React, { useState, useEffect } from 'react';
// // // // // import './UpdateUserRole.css';
// // // // // // Assuming you have axios for API calls
// // // // // import axios from 'axios';

// // // // // function UpdateUserRole() {
// // // // //     const [users, setUsers] = useState([]);
// // // // //     const [selectedRole, setSelectedRole] = useState("");

// // // // //     useEffect(() => {
// // // // //         // Fetch all users from your API.
// // // // //         // For now, I'll use mock data. You should replace this with an actual API call.
// // // // //         setUsers([
// // // // //             { id: 1, username: 'user1', role: 'user' },
// // // // //             { id: 2, username: 'user2', role: 'admin' }
// // // // //             // ... other users
// // // // //         ]);
// // // // //     }, []);

// // // // //     const handleRoleChange = (userId, event) => {
// // // // //         const newRole = event.target.value;
// // // // //         // TODO: Make an API call to update the user's role
// // // // //         // For now, updating the local state
// // // // //         setUsers(prevUsers =>
// // // // //             prevUsers.map(user => user.id === userId ? { ...user, role: newRole } : user)
// // // // //         );
// // // // //     };

// // // // //     return (
// // // // //         <div className="update-user-role">
// // // // //             <h2>Update User Roles</h2>
// // // // //             <table>
// // // // //                 <thead>
// // // // //                     <tr>
// // // // //                         <th>Username</th>
// // // // //                         <th>Current Role</th>
// // // // //                         <th>Change Role</th>
// // // // //                     </tr>
// // // // //                 </thead>
// // // // //                 <tbody>
// // // // //                     {users.map(user => (
// // // // //                         <tr key={user.id}>
// // // // //                             <td>{user.username}</td>
// // // // //                             <td>{user.role}</td>
// // // // //                             <td>
// // // // //                                 <select value={selectedRole} onChange={e => handleRoleChange(user.id, e)}>
// // // // //                                     <option value="user">User</option>
// // // // //                                     <option value="admin">Admin</option>
// // // // //                                 </select>
// // // // //                             </td>
// // // // //                         </tr>
// // // // //                     ))}
// // // // //                 </tbody>
// // // // //             </table>
// // // // //         </div>
// // // // //     );
// // // // // }

// // // // // export default UpdateUserRole;

// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import './UpdateUserRole.css'

// // // // function UpdateUserRole() {
// // // //     const [searchQuery, setSearchQuery] = useState('');
// // // //     const [user, setUser] = useState(null);
// // // //     const [error, setError] = useState(null);

// // // //     const handleSearch = async () => {
// // // //         try {
// // // //             // Replace with your actual API endpoint to search for a user by their name or email
// // // //             const response = await axios.get(`http://localhost:3000/api/users?search=${searchQuery}`);
// // // //             if (response.data && response.data.length > 0) {
// // // //                 setUser(response.data[0]);
// // // //             } else {
// // // //                 setError("User not found.");
// // // //             }
// // // //         } catch (err) {
// // // //             setError("Error searching for user.");
// // // //         }
// // // //     };

// // // //     const handleRoleChange = async () => {
// // // //         try {
// // // //             const updatedRole = user.role === 'admin' ? 'user' : 'admin';
// // // //             // Replace with your actual API endpoint to update the user's role
// // // //             await axios.put(`http://localhost:3000/api/users/${user.id}`, { role: updatedRole });
// // // //             setUser(prevUser => ({ ...prevUser, role: updatedRole }));
// // // //         } catch (err) {
// // // //             setError("Error updating user role.");
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="update-user-role">
// // // //             <h2>Update User Role</h2>
            
// // // //             <div className="user-search">
// // // //                 <input 
// // // //                     type="text" 
// // // //                     value={searchQuery} 
// // // //                     onChange={e => setSearchQuery(e.target.value)} 
// // // //                     placeholder="Search by name or email"
// // // //                 />
// // // //                 <button onClick={handleSearch}>Search</button>
// // // //             </div>

// // // //             {user && (
// // // //                 <div className="user-detail">
// // // //                     <p><strong>Name:</strong> {user.username}</p>
// // // //                     <p><strong>Email:</strong> {user.email}</p>
// // // //                     <p><strong>Role:</strong> {user.role}</p>
// // // //                     <button onClick={handleRoleChange}>
// // // //                         {user.role === 'admin' ? 'Downgrade User' : 'Upgrade to Admin'}
// // // //                     </button>
// // // //                 </div>
// // // //             )}

// // // //             {error && <div className="error">{error}</div>}
// // // //         </div>
// // // //     );
// // // // }

// // // // export default UpdateUserRole;

// // // // ---     - --- - - - - - - - - - -- - - - - - - - -- - - -
    
// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';
// // // // import './UpdateUserRole.css';

// // // // function UpdateUserRole() {
// // // //     const [searchQuery, setSearchQuery] = useState('');
// // // //     const [user, setUser] = useState(null);
// // // //     const [error, setError] = useState(null);

// // // //     const handleSearch = async () => {
// // // //         try {
// // // //             // Replace with your actual API endpoint to search for a user by their name or email
// // // //             const response = await axios.get(`http://localhost:3000/api/users?search=${searchQuery}`);
// // // //             if (response.data && response.data.length > 0) {
// // // //                 setUser(response.data[0]);
// // // //             } else {
// // // //                 setError("User not found.");
// // // //             }
// // // //         } catch (err) {
// // // //             setError("Error searching for user.");
// // // //         }
// // // //     };

// // // //     const handleRoleChange = async () => {
// // // //         try {
// // // //             const updatedRole = user.role === 'admin' ? 'user' : 'admin';
// // // //             // Replace with your actual API endpoint to update the user's role
// // // //             await axios.put(`http://localhost:3000/api/users/${user.id}`, { role: updatedRole });
// // // //             setUser(prevUser => ({ ...prevUser, role: updatedRole }));
// // // //         } catch (err) {
// // // //             setError("Error updating user role.");
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="update-user-role">
// // // //             <form className='container'>
// // // //                 <h3>Update User Role</h3>

// // // //                 {error && <div className="alert alert-danger">{error}</div>}

// // // //                 <div className="mb-3">
// // // //                     <label>Search User (by Name or Email)</label>
// // // //                     <input 
// // // //                         type="text" 
// // // //                         className="form-control"
// // // //                         value={searchQuery} 
// // // //                         onChange={e => setSearchQuery(e.target.value)} 
// // // //                         placeholder="Search by name or email"
// // // //                     />
// // // //                     <button type="button" className="btn btn-primary" onClick={handleSearch}>Search</button>
// // // //                 </div>

// // // //                 {user && (
// // // //                     <>
// // // //                         <div className="mb-3">
// // // //                             <label>Username</label>
// // // //                             <input
// // // //                                 type="text"
// // // //                                 className="form-control"
// // // //                                 value={user.username}
// // // //                                 readOnly
// // // //                             />
// // // //                         </div>
// // // //                         <div className="mb-3">
// // // //                             <label>Email</label>
// // // //                             <input
// // // //                                 type="text"
// // // //                                 className="form-control"
// // // //                                 value={user.email}
// // // //                                 readOnly
// // // //                             />
// // // //                         </div>
// // // //                         <div className="mb-3">
// // // //                             <label>Current Role</label>
// // // //                             <input
// // // //                                 type="text"
// // // //                                 className="form-control"
// // // //                                 value={user.role}
// // // //                                 readOnly
// // // //                             />
// // // //                         </div>
// // // //                         <div className="d-grid">
// // // //                             <button type="button" className="btn btn-primary" onClick={handleRoleChange}>
// // // //                                 {user.role === 'admin' ? 'Downgrade User' : 'Upgrade to Admin'}
// // // //                             </button>
// // // //                         </div>
// // // //                     </>
// // // //                 )}
// // // //             </form>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default UpdateUserRole;

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import './UpdateUserRole.css';

// // // function UpdateUserRole() {
// // //     const [searchQuery, setSearchQuery] = useState('');
// // //     const [selectedUser, setSelectedUser] = useState(null);
// // //     const [error, setError] = useState(null);

// // //     const handleSearch = async () => {
// // //         try {
// // //             // Assuming you have an endpoint that allows searching users by name or email
// // //             const response = await axios.get(`http://localhost:3000/api/users?search=${searchQuery}`);
// // //             if (response.data && response.data.length > 0) {
// // //                 setSelectedUser(response.data[0]); // Selecting the first matched user for simplicity
// // //             } else {
// // //                 setError("User not found.");
// // //             }
// // //         } catch (err) {
// // //             setError("Error searching for user");
// // //         }
// // //     };

// // //     const handleRoleChange = async () => {
// // //         try {
// // //             const updatedRole = selectedUser.role === 'admin' ? 'user' : 'admin';
// // //             // Update the user's role in the backend.
// // //             await axios.put(`http://localhost:3000/api/users/${selectedUser._id}`, { role: updatedRole });
// // //             setSelectedUser(prevUser => ({ ...prevUser, role: updatedRole }));
// // //         } catch (error) {
// // //             setError("Error updating user role");
// // //         }
// // //     };

// // //     return (
// // //         <div className="update-user-role">
// // //             <h3>Update User Role</h3>
// // //             {error && <div className="alert alert-danger">{error}</div>}

// // //             {/* Search Field */}
// // //             <div className="mb-3 search-section">
// // //                 <input 
// // //                     type="text" 
// // //                     className="form-control search-input" 
// // //                     placeholder="Search by name or email"
// // //                     value={searchQuery}
// // //                     onChange={(e) => setSearchQuery(e.target.value)}
// // //                 />
// // //                 <button className="btn search-btn" onClick={handleSearch}>Search</button>
// // //             </div>

// // //             {selectedUser && (
// // //                 <div className="user-details">
// // //                     <p><strong>Username:</strong> {selectedUser.username}</p>
// // //                     <p><strong>Email:</strong> {selectedUser.email}</p>
// // //                     <p><strong>Current Role:</strong> {selectedUser.role}</p>
// // //                     <button className="btn change-role-btn" onClick={handleRoleChange}>
// // //                         {selectedUser.role === 'admin' ? 'Downgrade to User' : 'Upgrade to Admin'}
// // //                     </button>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // }

// // // export default UpdateUserRole;

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './UpdateUserRole.css';

// // function UpdateUserRole() {
// //     const [searchQuery, setSearchQuery] = useState('');
// //     const [userData, setUserData] = useState({ username: '', email: '', role: '' });
// //     const [error, setError] = useState(null);

// //     const handleSearch = async () => {
// //         try {
// //             const response = await axios.get(`http://localhost:3000/api/users?search=${searchQuery}`);
// //             if (response.data && response.data.length > 0) {
// //                 setUserData(response.data[0]); // Setting the first user found.
// //             } else {
// //                 setError("User not found.");
// //             }
// //         } catch (err) {
// //             setError("Error searching for user");
// //         }
// //     };

// //     const handleRoleChange = async () => {
// //         try {
// //             const newRole = userData.role === 'admin' ? 'user' : 'admin';
// //             await axios.put(`http://localhost:3000/api/users/${userData._id}`, { role: newRole });
// //             setUserData({ ...userData, role: newRole });
// //         } catch (err) {
// //             setError("Error updating user role");
// //         }
// //     };

// //     return (
// //         <div className="update-book"> {/* Reusing the same class to get the design */}
// //             <form className='container'>
// //                 <h3>Update User Role</h3>

// //                 {error && <div className="alert alert-danger">{error}</div>}

// //                 <div className="mb-3">
// //                     <label>Search User by Name/Email</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         placeholder="Enter username or email"
// //                         value={searchQuery}
// //                         onChange={(e) => setSearchQuery(e.target.value)}
// //                     />
// //                     <button type="button" className="btn btn-primary" onClick={handleSearch}>
// //                         Search
// //                     </button>
// //                 </div>

// //                 <div className="mb-3">
// //                     <label>Username</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         value={userData.username}
// //                         readOnly
// //                     />
// //                 </div>

// //                 <div className="mb-3">
// //                     <label>Email</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         value={userData.email}
// //                         readOnly
// //                     />
// //                 </div>

// //                 <div className="mb-3">
// //                     <label>Role</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         value={userData.role}
// //                         readOnly
// //                     />
// //                 </div>

// //                 <div className="d-grid">
// //                     {userData.role && (
// //                         <button type="button" className="btn btn-primary" onClick={handleRoleChange}>
// //                             {userData.role === 'admin' ? 'Downgrade to User' : 'Upgrade to Admin'}
// //                         </button>
// //                     )}
// //                 </div>
// //                 <br />
// //             </form>
// //         </div>
// //     );
// // }

// // export default UpdateUserRole;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './UpdateUserRole.css';

// function UpdateUserRole() {
//     const [search, setSearch] = useState('');
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState(null);
//     const token = localStorage.getItem('authToken');

//     const fetchUser = async () => {
//         try {
//             const response = await axios.get(`http://localhost:3000/api/users/${search}`);
//             setUser(response.data);
//         } catch (err) {
//             setError("Error fetching user details");
//         }
//     };

//     const handleRoleUpdate = async () => {
//         try {
//             const headers = {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             };
//             const response = await axios.put(`http://localhost:3000/api/users/role/${user._id}`, { isAdmin: !user.isAdmin }, { headers });
//             setUser(response.data);  // Update the local state with the updated user data
//         } catch (error) {
//             setError("Error updating user role");
//         }
//     };

//     return (
//         <div className="update-user-role">
//             <form className='container' onSubmit={(e) => { e.preventDefault(); fetchUser(); }}>
//                 <h3>Update User Role</h3>

//                 {error && <div className="alert alert-danger">{error}</div>}

//                 <div className="mb-3">
//                     <label>Search by ID</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="User ID"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                 </div>

//                 <div className="d-grid">
//                     <button type="submit" className="btn btn-primary">
//                         Search User
//                     </button>
//                 </div>
//             </form>
            
//             {user && (
//                 <div>
//                     <p><strong>Name:</strong> {user.name}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Role:</strong> {user.isAdmin ? 'Admin' : 'User'}</p>
//                     <button onClick={handleRoleUpdate}>
//                         {user.isAdmin ? 'Downgrade to User' : 'Upgrade to Admin'}
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default UpdateUserRole;




// --------------------------------------- perfect below =------------------------------------

// import React, { useState } from 'react';
// import axios from 'axios';
// import './UpdateUserRole.css';

// function UpdateUserRole() {
//     const [search, setSearch] = useState('');
//     const [searchType, setSearchType] = useState('name'); // Default search by name
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState(null);
//     const token = localStorage.getItem('authToken');

//     const fetchUser = async () => {
//         try {
//             const response = await axios.get(`http://localhost:3000/api/users/search?${searchType}=${search}`);
//             setUser(response.data);
//         } catch (err) {
//             setError("Error fetching user details");
//         }
//     };

//     const handleRoleUpdate = async () => {
//         try {
//             const headers = {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             };
//             const response = await axios.put(`http://localhost:3000/api/users/role/${user._id}`, { isAdmin: !user.isAdmin }, { headers });
//             setUser(response.data);  // Update the local state with the updated user data
//         } catch (error) {
//             setError("Error updating user role");
//         }
//     };

//     return (
//         <div className="update-user-role">
//             <form className='container' onSubmit={(e) => { e.preventDefault(); fetchUser(); }}>
//                 <h3>Update User Role</h3>

//                 {error && <div className="alert alert-danger">{error}</div>}

//                 <div className="mb-3">
//                     <label>Search by</label>
//                     <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
//                         <option value="name">Name</option>
//                         <option value="email">Email</option>
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder={searchType === 'name' ? "User Name" : "User Email"}
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                 </div>

//                 <div className="d-grid">
//                     <button type="submit" className="btn btn-primary">
//                         Search User
//                     </button>
//                 </div>
//             </form>
            
//             {user && (
//                 <div>
//                     <p><strong>Name:</strong> {user.name}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Role:</strong> {user.isAdmin ? 'Admin' : 'User'}</p>
//                     <button onClick={handleRoleUpdate}>
//                         {user.isAdmin ? 'Downgrade to User' : 'Upgrade to Admin'}
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default UpdateUserRole;

import React, { useState } from 'react';
import axios from 'axios';
import './UpdateUserRole.css';  // Assuming you want to use the same CSS as UpdateBook

function UpdateUserRole() {
    const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('name'); // Default search by name
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
