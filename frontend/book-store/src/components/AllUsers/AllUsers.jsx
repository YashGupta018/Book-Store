// // // // import React, { useState, useEffect } from 'react';
// // // // import './AllUsers.css';

// // // // function AllUsers() {
// // // //     const [users, setUsers] = useState([]);

// // // //     useEffect(() => {
// // // //         // TODO: Fetch users from the API and set them in the state.
// // // //         // For now, we'll use mock data.
// // // //         setUsers([
// // // //             { id: 1, username: 'User1', email: 'user1@example.com', role: 'customer' },
// // // //             { id: 2, username: 'User2', email: 'user2@example.com', role: 'admin' }
// // // //             // ... other users
// // // //         ]);
// // // //     }, []);

// // // //     return (
// // // //         <div className="all-users">
// // // //             <h2>All Users</h2>
// // // //             <table>
// // // //                 <thead>
// // // //                     <tr>
// // // //                         <th>ID</th>
// // // //                         <th>Username</th>
// // // //                         <th>Email</th>
// // // //                         <th>Role</th>
// // // //                     </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                     {users.map(user => (
// // // //                         <tr key={user.id}>
// // // //                             <td>{user.id}</td>
// // // //                             <td>{user.username}</td>
// // // //                             <td>{user.email}</td>
// // // //                             <td>{user.role}</td>
// // // //                         </tr>
// // // //                     ))}
// // // //                 </tbody>
// // // //             </table>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default AllUsers;

// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import './AllUsers.css';

// // // function AllUsers() {
// // //     const [users, setUsers] = useState([]);
// // //     const token = localStorage.getItem('authToken');

// // //     useEffect(() => {
// // //         const fetchUsers = async () => {
// // //             try {
// // //                 const headers = {
// // //                     'Content-Type': 'application/json',
// // //                     'Authorization': `Bearer ${token}`
// // //                 };
// // //                 const response = await axios.get('http://localhost:3000/api/users/all', { headers });
// // //                 setUsers(response.data);
// // //             } catch (error) {
// // //                 console.error("Error fetching users:", error.message);
// // //             }
// // //         };

// // //         fetchUsers();
// // //     }, []);

// // //     return (
// // //         <div className="all-users">
// // //             <h2>All Users</h2>
// // //             <table>
// // //                 <thead>
// // //                     <tr>
// // //                         <th>ID</th>
// // //                         <th>Username</th>
// // //                         <th>Email</th>
// // //                         <th>Role</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {users.map(user => (
// // //                         <tr key={user._id}>
// // //                             <td>{user._id}</td>
// // //                             <td>{user.name}</td>
// // //                             <td>{user.email}</td>
// // //                             <td>{user.role}</td>
// // //                         </tr>
// // //                     ))}
// // //                 </tbody>
// // //             </table>
// // //         </div>
// // //     );
// // // }

// // // export default AllUsers; ------------------

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './AllUsers.css';

// // function AllUsers() {
// //     const [users, setUsers] = useState([]);
// //     const token = localStorage.getItem('authToken');

// //     useEffect(() => {
// //         const fetchUsers = async () => {
// //             try {
// //                 const headers = {
// //                     'Content-Type': 'application/json',
// //                     'Authorization': `Bearer ${token}`
// //                 };
// //                 const response = await axios.get('http://localhost:3000/api/users/all', { headers });
                
// //                 // Checking if the response data contains users and role field
// //                 if (response.data && response.data.length > 0 && response.data[0].role) {
// //                     setUsers(response.data);
// //                 } else {
// //                     console.error("Users fetched but role field is missing");
// //                 }
                
// //             } catch (error) {
// //                 console.error("Error fetching users:", error.message);
// //             }
// //         };

// //         fetchUsers();
// //     }, []);

// //     return (
// //         <div className="all-users">
// //             <h2>All Users</h2>
// //             <table>
// //                 <thead>
// //                     <tr>
// //                         <th>ID</th>
// //                         <th>Username</th>
// //                         <th>Email</th>
// //                         <th>Role</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {users.map(user => (
// //                         <tr key={user._id}>
// //                             <td>{user._id}</td>
// //                             <td>{user.name}</td>
// //                             <td>{user.email}</td>
// //                             <td>{user.role}</td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // }

// // export default AllUsers;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AllUsers.css';

// function AllUsers() {
//     const [users, setUsers] = useState([]);
//     const token = localStorage.getItem('authToken');

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const headers = {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 };
//                 const response = await axios.get('http://localhost:3000/api/users/all', { headers });
                
//                 if (response && response.data) {
//                     console.log("Fetched users:", response.data);  // Logging fetched users for clarity
//                     setUsers(response.data);
//                 } else {
//                     console.error("No data received from the server");
//                 }
                
//             } catch (error) {
//                 console.error("Error fetching users:", error.message);
//             }
//         };

//         fetchUsers();
//     }, []);

//     return (
//         <div className="all-users">
//             <h2>All Users</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Username</th>
//                         <th>Email</th>
//                         <th>Role</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user._id}>
//                             <td>{user._id}</td>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.role}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default AllUsers;

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
                            {/* Map isAdmin to role */}
                            <td>{user.isAdmin ? 'Admin' : 'User'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllUsers;
