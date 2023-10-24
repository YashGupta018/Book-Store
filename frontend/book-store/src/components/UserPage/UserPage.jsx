import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserPage.css';

function WelcomePage() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchBy, setSearchBy] = useState('title');

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

    const handleSearch = async () => {
        let endpoint = 'http://localhost:3000/api/books?';

        switch (searchBy) {
            case 'authors':
                endpoint += `authors=${searchTerm}`;
                break;
            case 'genre':
                endpoint += `genre=${searchTerm}`;
                break;
            case 'bookID':
                endpoint = `http://localhost:3000/api/books/${searchTerm}`;
                break;
            default: // title
                endpoint += `title=${searchTerm}`;
                break;
        }

        try {
            const response = await axios.get(endpoint);
            
            if (searchBy === 'bookID') {
                setBooks([response.data]);
            } else {
                setBooks(response.data);
            }
            
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className="welcome-container">
            <div className="top-bar">
                <div className="logo">KitabKosh</div>
                <div className="search-container">
                    <div className='radiobtn'>
                        <div className='rb1'><label><input type="radio" name="searchBy" value="title" checked={searchBy === 'title'} onChange={e => setSearchBy(e.target.value)} /> Title</label></div>
                        <div className='rb2'><label><input type="radio" name="searchBy" value="author" checked={searchBy === 'author'} onChange={e => setSearchBy(e.target.value)} /> Author</label></div>
                        <div className='rb3'><label><input type="radio" name="searchBy" value="genre" checked={searchBy === 'genre'} onChange={e => setSearchBy(e.target.value)} /> Genre</label></div>
                        <div className='rb4'><label><input type="radio" name="searchBy" value="bookID" checked={searchBy === 'bookID'} onChange={e => setSearchBy(e.target.value)} /> BookID</label></div>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="button-container">
                    <Link to="/books" className="btn btn-cart">Books<i className="fas fa-shopping-cart"></i></Link>
                    <Link to="/cart" className="btn btn-cart">Cart<i className="fas fa-shopping-cart"></i></Link>
                    <Link to="/order-detail" className="btn btn-login">Order Detail</Link>
                    <Link to="/" className="btn btn-register">Logout</Link>
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
