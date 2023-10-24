// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // function AllOrders() {
// // //     const [orders, setOrders] = useState([]);
// // //     const [error, setError] = useState(null);
// // //     const token = localStorage.getItem('authToken');

// // //     useEffect(() => {
// // //         const fetchOrders = async () => {
// // //             try {
// // //                 const headers = {
// // //                     'Content-Type': 'application/json',
// // //                     'Authorization': `Bearer ${token}`
// // //                 };
// // //                 const response = await axios.get('http://localhost:3000/api/orders/all', { headers });
// // //                 setOrders(response.data);
// // //             } catch (err) {
// // //                 setError("Error fetching orders");
// // //             }
// // //         };

// // //         fetchOrders();
// // //     }, []);

// // //     return (
// // //         <div className="all-orders">
// // //             <h3>All Orders</h3>

// // //             {error && <div className="alert alert-danger">{error}</div>}

// // //             <table className="table">
// // //                 <thead>
// // //                     <tr>
// // //                         <th>Order ID</th>
// // //                         <th>User Name</th>
// // //                         <th>User Email</th>
// // //                         <th>Date</th>
// // //                         <th>Total Price</th>
// // //                         <th>Items</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {orders.map(order => (
// // //                         <tr key={order._id}>
// // //                             <td>{order._id}</td>
// // //                             <td>{order.user.name}</td>  {/* Assuming user object has a name property */}
// // //                             <td>{order.user.email}</td> {/* Assuming user object has an email property */}
// // //                             <td>{new Date(order.date).toLocaleDateString()}</td>
// // //                             <td>{order.totalAmount}</td>
// // //                             <td>{order.books.map(book => book.title).join(', ')}</td>
// // //                         </tr>
// // //                     ))}
// // //                 </tbody>
// // //             </table>
// // //         </div>
// // //     );
// // // }

// // // export default AllOrders;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './AllOrders.css';

// // function AllOrders() {
// //     const [orders, setOrders] = useState([]);
// //     const [error, setError] = useState(null);
// //     const token = localStorage.getItem('authToken');

// //     useEffect(() => {
// //         const fetchOrders = async () => {
// //             try {
// //                 const headers = {
// //                     'Content-Type': 'application/json',
// //                     'Authorization': `Bearer ${token}`
// //                 };
// //                 const response = await axios.get('http://localhost:3000/api/orders/all', { headers });
// //                 setOrders(response.data);
// //             } catch (err) {
// //                 setError("Error fetching orders");
// //             }
// //         };

// //         fetchOrders();
// //     }, []);

// //     return (
// //         <div className="all-orders container">
// //             <h3 className="mt-4">All Orders</h3>
// //             <hr />

// //             {error && <div className="alert alert-danger">{error}</div>}

// //             <table className="table table-striped">
// //                 <thead>
// //                     <tr>
// //                         <th>Order ID</th>
// //                         <th>User Name</th>
// //                         <th>User Email</th>
// //                         <th>Total Price</th>
// //                         <th>Quantity</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {orders.map(order => (
// //                         <tr key={order._id}>
// //                             <td>{order._id}</td>
// //                             <td>{order.user.name}</td>
// //                             <td>{order.user.email}</td>
// //                             <td>{order.totalAmount}</td>
// //                             <td>{order.books.map(book => book.quantity).join(', ')}</td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // }

// // export default AllOrders;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AllOrders.css';

// function AllOrders() {
//     const [orders, setOrders] = useState([]);
//     const [error, setError] = useState(null);
//     const token = localStorage.getItem('authToken');

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const headers = {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 };
//                 const response = await axios.get('http://localhost:3000/api/orders/all', { headers });
//                 setOrders(response.data);
//             } catch (err) {
//                 setError("Error fetching orders");
//             }
//         };

//         fetchOrders();
//     }, []);

//     return (
//         <div className="all-orders">
//             <h2>All Orders</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Order ID</th>
//                         <th>User Name</th>
//                         <th>Email</th>
//                         <th>Book Names</th>
//                         <th>Quantity</th>
//                         <th>Total Price</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 {/* <tbody>
//                     {orders.map(order => (
//                         <tr key={order._id}>
//                             <td>{order._id}</td>
//                             <td>{order.user.name}</td>
//                             <td>{order.user.email}</td>
//                             <td>{order.books.map(book => book.title).join(', ')}</td>
//                             <td>{order.books.map(book => book.quantity).join(', ')}</td>
//                             <td>{order.totalAmount}</td>
//                             <td>{new Date(order.orderDate).toLocaleDateString()}</td>
//                         </tr>
//                     ))}
//                 </tbody> */}
//                 <tbody>
//                     {orders.map(order => (
//                         <tr key={order._id}>
//                             <td>{order._id}</td>
//                             <td>{order.user.name}</td>
//                             <td>{order.user.email}</td>
//                             <td>{order.books.map(bookItem => bookItem.book.title).join(', ')}</td>
//                             <td>{order.books.map(bookItem => bookItem.quantity).join(', ')}</td>
//                             <td>{order.totalAmount}</td>
//                             <td>{new Date(order.orderDate).toLocaleDateString()}</td>
//                         </tr>
//                     ))}
//                 </tbody>

//             </table>
//         </div>
//     );
// }

// export default AllOrders;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllOrders.css';

function AllOrders() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('authToken');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                };
                const response = await axios.get('http://localhost:3000/api/orders/all', { headers });
                setOrders(response.data);
            } catch (err) {
                setError("Error fetching orders");
            }
        };

        fetchOrders();
    }, []);

    return (
        <div className="all-orders">
            <h2>All Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Book Names</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.user.name}</td>
                            <td>{order.user.email}</td>
                            <td>{order.books.map(bookItem => bookItem.book.title).join(', ')}</td>
                            <td>{order.books.map(bookItem => bookItem.quantity).join(', ')}</td>
                            <td>{order.totalAmount}</td>
                            <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllOrders;
