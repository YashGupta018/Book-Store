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
