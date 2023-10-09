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
                console.log("Fetched books (using promise):", response.data); // logging the fetched books
                if (response && response.data) {
                    setBooks(response.data);
                    console.log("Books set to state:", response.data);
                } else {
                    console.error("Fetched data is not in expected format:", response);
                    setError("Unexpected response format from server.");
                }
            })
            .catch(err => {
                console.error("Error occurred while fetching books:", err); // logging the errors
                setError("Error fetching books");
            });
    }, []);

    if (error) {
        console.log("Rendering error message");
        return <div className="book-list">Error: {error}</div>;
    }

    return (
        <div className="book-list">
            {books.length === 0 ? (
                <div>No books available.</div>
            ) : (
                <table className="bookTable">
                    <thead>
                        <tr>
                            <th>Book ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book._id}>
                                <td>
                                    <Link to={`/book/${book._id}`}>
                                        {book.bookID}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/book/${book._id}`}>
                                        {book.title}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/book/${book._id}`}>
                                        {book.price}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default BookList;
