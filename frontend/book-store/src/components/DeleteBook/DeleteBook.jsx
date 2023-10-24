import React, { useState } from 'react';
import axios from 'axios';
import './DeleteBook.css';

function DeleteBook() {
    const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('title');
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('authToken');

    const fetchBook = async () => {
        try {
            let response;
            if (searchType === 'title') {
                response = await axios.get(`http://localhost:3000/api/books?title=${search}`);
            } else if (searchType === 'id') {
                response = await axios.get(`http://localhost:3000/api/books/object/${search}`);
            }
            setBook(response.data);
        } catch (err) {
            setError("Error fetching book details");
        }
    };

    const handleDelete = async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
    
            console.log("Deleting book with ID:", book._id);
    
            await axios.delete(`http://localhost:3000/api/books/${book._id}`, { headers });
            setBook(null);
        } catch (error) {
            console.error("Error deleting book:", error.response);
            setError("Error deleting book");
        }
    };    

    return (
        <div className="delete-book">
            <form className='container' onSubmit={(e) => { e.preventDefault(); fetchBook(); }}>
                <h3>Delete Book</h3>

                {error && <div className="alert alert-danger">{error}</div>}

                <div className="mb-3">
                    <label>Search by</label>
                    <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                        <option value="title">Title</option>
                        <option value="id">ObjectID</option>
                    </select>
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={searchType === 'title' ? "Book Title" : "Book ID"}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Search Book
                    </button>
                </div>
            </form>

            {book && (
                <div>
                    <p><strong>Title:</strong> {book.title}</p>
                    <p><strong>Author:</strong> {book.authors}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <button onClick={handleDelete} className="btn btn-danger">
                        Delete Book
                    </button>
                </div>
            )}
        </div>
    );
}

export default DeleteBook;