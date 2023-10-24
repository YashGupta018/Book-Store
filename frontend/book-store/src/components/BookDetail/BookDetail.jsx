// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import './BookDetail.css';

// // // function BookDetail({ match }) {
// // //     const [book, setBook] = useState({});
// // //     const [error, setError] = useState(null);
// // //     const token = localStorage.getItem('authToken');

// // //     useEffect(() => {
// // //         const fetchBookDetails = async () => {
// // //             try {
// // //                 const response = await axios.get(`http://localhost:3000/api/books/${match.params.id}`);
// // //                 setBook(response.data);
// // //             } catch (err) {
// // //                 setError("Error fetching book details");
// // //             }
// // //         };

// // //         fetchBookDetails();
// // //     }, [match.params.id]);

// // //     const addToCart = async () => {
// // //         try {
// // //             const headers = {
// // //                 'Content-Type': 'application/json',
// // //                 'Authorization': `Bearer ${token}`
// // //             };
// // //             const response = await axios.post('http://localhost:3000/api/cart/add', { bookId: book._id }, { headers });
// // //             console.log(response.data); // Handle the response (e.g., show a success message)
// // //         } catch (err) {
// // //             console.error("Error adding book to cart:", err);
// // //         }
// // //     };

// // //     return (
// // //         <div className="book-detail">
// // //             {error && <div className="alert alert-danger">{error}</div>}
// // //             <div className="book-image">
// // //                 {/* Display book image here */}
// // //                 <img src={book.imageURL} alt={book.title} />
// // //             </div>
// // //             <div className="book-info">
// // //                 <h2>{book.title}</h2>
// // //                 <p><strong>Author:</strong> {book.author}</p>
// // //                 <p><strong>Genre:</strong> {book.genre}</p>
// // //                 <p><strong>Publish Date:</strong> {new Date(book.publishDate).toLocaleDateString()}</p>
// // //                 <p><strong>Price:</strong> ${book.price}</p>
// // //                 <button onClick={addToCart}>Add to Cart</button>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default BookDetail;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './BookDetail.css';
// // import { useParams } from 'react-router-dom';

// // function BookDetail(props) {
// //     const [book, setBook] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const { id } = useParams();
// //     const bookId = props.match.params.id;  // Extract book ID from the URL

// //     useEffect(() => {
// //         const fetchBook = async () => {
// //             try {
// //                 const response = await axios.get(`http://localhost:3000/api/books/${bookId}`);
// //                 setBook(response.data);
// //                 setLoading(false);
// //             } catch (err) {
// //                 setError(err.message);
// //                 setLoading(false);
// //             }
// //         };

// //         fetchBook();
// //     }, [bookId]);

// //     if (loading) return <div>Loading...</div>;
// //     if (error) return <div>Error: {error}</div>;

// //     return (
// //         <div className="book-detail">
// //             <h2>{book.title}</h2>
// //             <div className="book-info">
// //                 <img src={book.coverImageURL} alt={book.title} />
// //                 <div className="book-details">
// //                     <p><strong>Author:</strong> {book.author}</p>
// //                     <p><strong>Genre:</strong> {book.genre}</p>
// //                     <p><strong>Date of Publishing:</strong> {new Date(book.publishDate).toLocaleDateString()}</p>
// //                     <p><strong>Price:</strong> ${book.price}</p>
// //                     <button className="add-to-cart-btn">Add to Cart</button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default BookDetail;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './BookDetail.css';
// import { useParams } from 'react-router-dom';

// function BookDetail() {
//     const [book, setBook] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const { id } = useParams();  // Extract the book ID from the route parameters.

//     useEffect(() => {
//         const fetchBook = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3000/api/books/${id}`);
//                 setBook(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };

//         fetchBook();
//     }, [id]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className="book-detail">
//             <h2>{book.title}</h2>
//             <div className="book-info">
//                 <img src={book.coverImageURL} alt={book.title} />
//                 <div className="book-details">
//                     <p><strong>Author:</strong> {book.author}</p>
//                     <p><strong>Genre:</strong> {book.genre}</p>
//                     <p><strong>Date of Publishing:</strong> {new Date(book.publishDate).toLocaleDateString()}</p>
//                     <p><strong>Price:</strong> ${book.price}</p>
//                     <button className="add-to-cart-btn">Add to Cart</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BookDetail;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './BookDetail.css';
// import { useParams, useNavigate } from 'react-router-dom';

// function BookDetail() {
//     const [book, setBook] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const { id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchBook = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3000/api/books/${id}`);
//                 setBook(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };

//         fetchBook();
//     }, [id]);

//     // const addToCart = async () => {
//     //     try {
//     //         const response = await axios.post(`http://localhost:3000/api/cart/add`, { bookId: id });
//     //         if (response.status === 200) {
//     //             navigate('/cart');
//     //         }
//     //     } catch (err) {
//     //         setError("Error adding book to cart: " + err.message);
//     //     }
//     // };

//     // const addToCart = async () => {
//     //     try {
//     //         const token = localStorage.getItem('authToken');
//     //         const headers = {
//     //             'Content-Type': 'application/json',
//     //             'Authorization': `Bearer ${token}`
//     //         };
//     //         const response = await axios.post(`http://localhost:3000/api/cart/add`, { bookId: id }, { headers });
    
//     //         if (response.status === 200) {
//     //             navigate('/cart');
//     //         }
//     //     } catch (err) {
//     //         setError("Error adding book to cart: " + err.message);
//     //     }
//     // };
    
//     const addToCart = async () => {
//         try {
//             const token = localStorage.getItem('authToken');
//             const headers = {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             };
//             const response = await axios.post(
//                 `http://localhost:3000/api/cart/add`, 
//                 { 
//                     bookId: id, 
//                     quantity: 1  // Defaulting to adding 1 book for now
//                 }, 
//                 { headers }
//             );
    
//             if (response.status === 200) {
//                 navigate('/cart');
//             }
//         } catch (err) {
//             setError("Error adding book to cart: " + err.message);
//         }
//     };    

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className="book-detail">
//             <h2>{book.title}</h2>
//             <div className="book-info">
//                 <img src={book.coverImageURL} alt={book.title} />
//                 <div className="book-details">
//                     <p><strong>Author:</strong> {book.authors}</p>
//                     <p><strong>Genre:</strong> {book.genre}</p>
//                     <p><strong>Date of Publishing:</strong> {new Date(book.publication_date).toLocaleDateString()}</p>
//                     <p><strong>Price:</strong> ₹{book.price}</p>
//                     <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BookDetail;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookDetail.css';
import { useParams, useNavigate } from 'react-router-dom';

function BookDetail() {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();  // This is the MongoDB's ObjectID for the book
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