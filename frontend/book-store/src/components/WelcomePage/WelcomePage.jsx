import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
    const [books, setBooks] = useState([]);

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

    const highestRatedBook = books[0];

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/books?title=${searchTerm}`);
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className="welcome-container">
            <div className="top-bar">
                <div className="logo">KitabKosh</div>
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Search books, authors..." 
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="button-container">
                    <Link to="/books" className="btn btn-cart">Books<i className="fas fa-shopping-cart"></i></Link>
                    <Link to="/cart" className="btn btn-cart">Cart<i className="fas fa-shopping-cart"></i></Link>
                    <Link to="/login" className="btn btn-login">Login</Link>
                    <Link to="/register" className="btn btn-register">Register</Link>
                </div>
            </div>
            <div className="main-content">
                <h2>Welcome to KitabKosh! Explore books and more.</h2>
                <h3>Top 10 Books by User Rating</h3>
                <div className="book-list-container">
                    <ul>
                        {
                            books.map((book) => (
                                <li key={book._id}>
                                    {book._id === highestRatedBook._id ? (
                                        <strong>
                                            <Link to={`/books/${book._id}`}>{book.title} - Rating: {book.average_rating}</Link>
                                        </strong>
                                    ) : (
                                        <Link to={`/books/${book._id}`}>{book.title} - Rating: {book.average_rating}</Link>
                                    )}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
