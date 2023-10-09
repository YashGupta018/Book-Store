import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
    // sample cart items
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'The Alchemist', price: 400, quantity: 1, image: 'path_to_image1' },
        { id: 2, name: 'Rich Dad Poor Dad', price: 350, quantity: 1, image: 'path_to_image2' },
        { id: 3, name: 'Sapiens', price: 500, quantity: 1, image: 'path_to_image3' }
    ]);

    const handleQuantityChange = (id, change) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + change };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <p>₹{item.price}</p>
                        <div className="quantity-control">
                            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h2>Summary</h2>
                <p>Total: ₹{total.toFixed(2)}</p>
                <Link to="/checkout">Checkout</Link>
            </div>
        </div>
    );
}

export default Cart;
