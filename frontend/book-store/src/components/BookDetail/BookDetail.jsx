import React, { useState, useEffect } from 'react';
import { fetchBookById, deleteBook } from '../../api'; 
import { useNavigate, useParams } from 'react-router-dom';
import './BookDetail.css';

function BookDetail() {
    const [book, setBook] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams(); // getting the book id from the route parameters

    useEffect(() => {
        fetchBookById(id)
            .then(response => {
                setBook(response.data);
            })
            .catch(err => {
                setError("Error fetching book details");
            });
    }, [id]);

    const handleDelete = () => {
        if(window.confirm("Are you sure you want to delete this book?")) {
            deleteBook(id)
                .then(() => {
                    navigate('/'); 
                })
                .catch(err => {
                    setError("Error deleting book");
                });
        }
    }

    if(error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="book-detail">
            <h1>{book.title}</h1>
            <button onClick={handleDelete}>Delete Book</button>
            {/* this is to show other book details */}
        </div>
    );
}

export default BookDetail;
