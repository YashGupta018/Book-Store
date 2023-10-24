import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [enteredAmount, setEnteredAmount] = useState('');

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/books/${bookId}`);
                setBook(response.data);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };
        fetchBookDetails();
    }, [bookId]);

    const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const totalPrice = book ? book.price * quantity : 0;
    const isAmountValid = parseFloat(enteredAmount) === totalPrice + 2.99;

    return (
        <section className="h-100 h-custom">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="h5">Shopping Bag</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {book && (
                                        <tr>
                                            <td>
                                                <strong>{book.name}</strong><br/>
                                                {book.authors.join(', ')}
                                            </td>
                                            <td className="align-middle">
                                                <div className="d-flex flex-row">
                                                    <button className="btn btn-link px-2" onClick={handleDecrement}>
                                                        <i className="fas fa-minus"></i>
                                                    </button>
                                                    <input 
                                                        value={quantity} 
                                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                                        type="number"
                                                        className="form-control form-control-sm" 
                                                        style={{ width: '50px' }} 
                                                    />
                                                    <button className="btn btn-link px-2" onClick={handleIncrement}>
                                                        <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <p className="mb-0" style={{ fontWeight: 500 }}>₹{totalPrice}</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="card shadow-2-strong mb-5 mb-lg-0" style={{ borderRadius: '16px' }}>
                            <div className="card-body p-4">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h5>Payment Method</h5>
                                        <div className="d-flex flex-row pb-3">
                                            <div className="rounded border w-100 p-3">
                                                <p className="d-flex align-items-center mb-0">Cash on Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3">
                                        <div className="d-flex justify-content-between" style={{ fontWeight: 500 }}>
                                            <p className="mb-2">Subtotal</p>
                                            <p className="mb-2">₹{totalPrice}</p>
                                        </div>
                                        <div className="d-flex justify-content-between" style={{ fontWeight: 500 }}>
                                            <p className="mb-0">Shipping</p>
                                            <p className="mb-0">₹2.99</p>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-flex justify-content-between mb-4" style={{ fontWeight: 500 }}>
                                            <p className="mb-2">Total (tax included)</p>
                                            <p className="mb-2">₹{totalPrice + 2.99}</p>
                                        </div>
                                        <div className="mb-4">
                                            <label>Enter Exact Amount:</label>
                                            <input 
                                                type="text"
                                                value={enteredAmount}
                                                onChange={(e) => setEnteredAmount(e.target.value)}
                                                className="form-control"
                                            />
                                        </div>
                                        <button type="button" className="btn btn-primary btn-block btn-lg" disabled={!isAmountValid}>
                                            <div className="d-flex justify-content-between">
                                                <span>Checkout</span>
                                                <span>₹{totalPrice + 2.99}</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
