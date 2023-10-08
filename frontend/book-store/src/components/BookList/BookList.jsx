import React, { useState, useEffect } from 'react';
import { fetchAllBooks } from '../../api';
import { Link } from 'react-router-dom';
import './BookList.css';

function BookList() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Fetching books..."); // logging the start of the fetch process
        fetchAllBooks()
            .then(response => {
                console.log("Books fetched:", response.data); // logging the fetched books
                setBooks(response.data);
            })
            .catch(err => {
                console.error("Error occurred while fetching books:", err); // logging the errors
                setError("Error fetching books");
            });
    }, []);

    if (error) {
        console.log("Rendering error message");
        return <div className="book-list">{error}</div>;
    }

    return (
        <div className="book-list">
            {books.length === 0 && <div>No books available.</div>}
            {books.map(book => (
                <Link key={book._id} to={`/book/${book._id}`}>
                    <div>
                        {book.title}
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BookList;
