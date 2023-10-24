import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BookList.css';

function BookList() {
    const [books, setBooks] = useState([]);
    const [totalBooks, setTotalBooks] = useState(0);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const LIMIT = 10;

    useEffect(() => {
        fetchBooks();
        fetchTotalBooks();
    }, [page]);

    const fetchBooks = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/books?start=${(page - 1) * LIMIT}&limit=${LIMIT}`);
            if (response && response.data) {
                setBooks(response.data);
            } else {
                setError("Unexpected response format from server.");
            }
        } catch (err) {
            setError("Error fetching books");
        }
    }

    const fetchTotalBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/books/count');
            if (response && response.data) {
                setTotalBooks(response.data.count);
            }
        } catch (err) {
            console.error("Error fetching total book count:", err);
        }
    }

    const totalPages = Math.ceil(totalBooks / LIMIT);

    return (
        <div className="book-list">
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        <Link to={`/book/${book.bookID}`}>
                            {book.title}
                        </Link>
                    </li>
                ))}
            </ul>
            
            <div className="pagination-buttons">
                {page > 1 && <button onClick={() => setPage(prev => prev - 1)}>Previous</button>}
                {page < totalPages && <button onClick={() => setPage(prev => prev + 1)}>Next</button>}
            </div>
        </div>
    );
}

export default BookList;
