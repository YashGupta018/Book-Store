import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/books');
                const sortedBooks = response.data.sort((a, b) => b.average_rating - a.average_rating).slice(0, 10);
                setBooks(sortedBooks);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);

    const handleLogout = () => {
        console.log('Attempting to logout...');
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        navigate('/');
    };

    const isAdmin = true; // dynamic value based on the logged-in user's role

    return (
        <div className="welcome-container">
            <div className="top-bar">
                <div className="logo">KitabKosh</div>
                <div className="nav-buttons">
                    <Link to="/books" className="btn btn-nav" id='bt1'>Books<i className="fas fa-shopping-cart"></i></Link>
                    <Link to="/cart" className="btn btn-nav" id='bt1'>Cart<i className="fas fa-shopping-cart"></i></Link>
                    <button onClick={handleLogout} className="btn btn-nav">Logout</button>
                </div>
            </div>

            {/* main content */}
            <div className="main-content">
                <div className="admin-content">
                    <h2>{isAdmin ? "Welcome to KitabKosh! Admin Dashboard" : "Welcome to KitabKosh! Explore books and more."}</h2>

                    {isAdmin ? (
                        <div className="admin-actions">
                            <button onClick={() => navigate("/add-book")}>Add a new book</button>
                            <button onClick={() => navigate("/edit-book")}>Update a book</button>
                            <button onClick={() => navigate("/admin/updateuserrole")}>Update user role</button>
                            <button onClick={() => navigate("/delete-book")}>Delete a book</button>
                            <button onClick={() => navigate("/delete-User")}>Delete a user</button>
                            <button onClick={() => navigate("/admin/orders")}>Show all orders</button>
                            <button onClick={() => navigate("/admin/users")}>View all users</button>
                        </div>
                        ) : (
                        <div>
                            <h3>Top 10 Books by User Rating</h3>
                            <div className="book-list-container">
                                <ul>
                                    {
                                        books.map((book) => (
                                            <li key={book._id}>
                                                <Link to={`/books/${book._id}`}>{book.title} - Rating: {book.average_rating}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
