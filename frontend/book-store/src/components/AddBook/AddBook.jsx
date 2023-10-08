import React, { useState } from 'react';
import { addBook } from '../../api';
import './AddBook.css';

function AddBook() {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        // other book fields
    });
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(bookData)
            .then(response => {
                // this handles successful book addition, maybe redirect or show a message
            })
            .catch(err => {
                setError("Error adding book");
            });
    };

    return (
        <div className="add-book">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={bookData.title} 
                    onChange={e => setBookData({ ...bookData, title: e.target.value })}
                    placeholder="Book Title"
                />
                {/* we can add other input fields for book details */}
                <button type="submit">Add Book</button>
            </form>
            {error && <div>{error}</div>}
        </div>
    );
}

export default AddBook;
