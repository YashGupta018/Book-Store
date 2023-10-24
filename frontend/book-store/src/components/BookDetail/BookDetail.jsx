import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookDetail.css';
import { useParams, useNavigate } from 'react-router-dom';

function BookDetail() {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/books/${id}`);
                setBook(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    const addToCart = async () => {
        try {
            const token = localStorage.getItem('authToken');
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            const response = await axios.post(
                `http://localhost:3000/api/cart/add`, 
                { 
                    bookId: book._id,  // Use the _id property from the fetched book data
                    quantity: 1  // Defaulting to adding 1 book for now
                }, 
                { headers }
            );
    
            if (response.status === 200) {
                navigate('/cart');
            }
        } catch (err) {
            setError("Error adding book to cart: " + err.message);
        }
    };    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="book-detail">
            <h2>{book.title}</h2>
            <div className="book-info">
                <img src="https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg" alt={book.title} />
                <div className="book-details">
                    <p><strong>Author:</strong> {book.authors}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <p><strong>Date of Publishing:</strong> {new Date(book.publication_date).toLocaleDateString()}</p>
                    <p><strong>Price:</strong> ₹{book.price}</p>
                    <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;