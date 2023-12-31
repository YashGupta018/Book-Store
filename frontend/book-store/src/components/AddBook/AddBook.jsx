import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css';

function AddBook() {
    const [bookData, setBookData] = useState({
        title: '',
        authors: '',
        genre: '',
        bookID: ''
    });
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('authToken');
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };

            const response = await axios.post('http://localhost:3000/api/books', bookData, { headers: headers });
            console.log('API Response:', response);
        } catch (err) {
            setError("Error adding book");
        }
    };

    return (
        <div className="add-book">
            <form className='container' onSubmit={handleSubmit}>
                <h3>Add Book</h3>
                {error && <div className="alert alert-danger">{error}</div>}

                <div className="mb-3">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        value={bookData.title}
                        onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Author</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter author"
                        value={bookData.authors}
                        onChange={(e) => setBookData({ ...bookData, authors: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Genre</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Genre"
                        value={bookData.genre}
                        onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Add Book</button>
                </div>
                <br />
            </form>
        </div>
    );
}

export default AddBook;
