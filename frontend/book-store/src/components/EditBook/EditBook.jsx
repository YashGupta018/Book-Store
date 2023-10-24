import React, { useState } from 'react';
import axios from 'axios';
import './EditBook.css';

function EditBook() {
    const [bookTitleToEdit, setBookTitleToEdit] = useState('');
    const [bookData, setBookData] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchBook = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/api/books?title=${bookTitleToEdit}`);
            if (response.data.length > 0) {
                setBookData(response.data[0]);
            } else {
                setError("No book found with the given title.");
            }
        } catch (err) {
            setError("Error fetching book details");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!bookData) return;

        try {
            const token = localStorage.getItem('authToken');
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };

            await axios.put(`http://localhost:3000/api/books/${bookData._id}`, bookData, { headers: headers });
            setError("Book updated successfully!");
        } catch (error) {
            setError("Error updating book");
            console.error('Error:', error);
        }
    };

    return (
        <div className="update-book">
            <form className='container' onSubmit={bookData ? handleSubmit : handleFetchBook}>
                <h3>Update Book</h3>

                {error && <div className="alert alert-danger">{error}</div>}

                {!bookData && (
                    <div className="mb-3">
                        <label>Enter the name/title of the book you want to edit:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={bookTitleToEdit}
                            onChange={(e) => setBookTitleToEdit(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary mt-2">Fetch Book</button>
                    </div>
                )}

                {bookData && (
                    <>
                        <div className="mb-3">
                            <label>Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={bookData.title}
                                onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Author</label>
                            <input
                                type="text"
                                className="form-control"
                                value={bookData.authors}
                                onChange={(e) => setBookData({ ...bookData, authors: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Genre</label>
                            <input
                                type="text"
                                className="form-control"
                                value={bookData.genre}
                                onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
                            />
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Update Book</button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}

export default EditBook;
