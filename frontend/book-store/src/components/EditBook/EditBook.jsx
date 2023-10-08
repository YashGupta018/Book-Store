import React, { useState, useEffect } from 'react';
import { fetchBookById, updateBook } from '../../api';
import { useParams } from 'react-router-dom';
import './EditBook.css';

function EditBook() {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        // other book fields
    });
    const [error, setError] = useState(null);
    const { id } = useParams(); // getting the book id from the route parameters

    useEffect(() => {
        fetchBookById(id)
            .then(response => {
                setBookData(response.data);
            })
            .catch(err => {
                setError("Error fetching book details");
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBook(id, bookData)
            .then(response => {
                // this will handle successful book update and redirect or show a message
            })
            .catch(err => {
                setError("Error updating book");
            });
    };

    return (
        <div className="edit-book">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={bookData.title} 
                    onChange={e => setBookData({ ...bookData, title: e.target.value })}
                    placeholder="Book Title"
                />
                {/* we can add other input fields for book details */}
                <button type="submit">Update Book</button>
            </form>
            {error && <div>{error}</div>}
        </div>
    );
}

export default EditBook;
