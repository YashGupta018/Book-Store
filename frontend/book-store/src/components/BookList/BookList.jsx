// // import React, { useState, useEffect } from 'react';
// // import { fetchAllBooks } from '../../api';
// // import { Link } from 'react-router-dom';
// // import './BookList.css';

// // function BookList() {
// //     const [books, setBooks] = useState([]);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         console.log("Fetching books..."); // logging the start of the fetch process
// //         fetchAllBooks()
// //             .then(response => {
// //                 console.log("Fetched books (using promise):", response.data); // logging the fetched books
// //                 if (response && response.data) {
// //                     setBooks(response.data);
// //                     console.log("Books set to state:", response.data);
// //                 } else {
// //                     console.error("Fetched data is not in expected format:", response);
// //                     setError("Unexpected response format from server.");
// //                 }
// //             })
// //             .catch(err => {
// //                 console.error("Error occurred while fetching books:", err); // logging the errors
// //                 setError("Error fetching books");
// //             });
// //     }, []);

// //     if (error) {
// //         console.log("Rendering error message");
// //         return <div className="book-list">Error: {error}</div>;
// //     }
// // // ---------------------------- 50 set 50 set
// //     return (
// //         <div className="book-list">
// //             {books.length === 0 ? (
// //                 <div>No books available.</div>
// //             ) : (
// //                 <table className="bookTable">
// //                     <thead>
// //                         <tr>
// //                             <th>Book ID</th>
// //                             <th>Name</th>
// //                             <th>Price</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {books.map(book => (
// //                             <tr key={book._id}>
// //                                 <td>
// //                                     <Link to={`/book/${book._id}`}>
// //                                         {book.bookID}
// //                                     </Link>
// //                                 </td>
// //                                 <td>
// //                                     <Link to={`/book/${book._id}`}>
// //                                         {book.title}
// //                                     </Link>
// //                                 </td>
// //                                 <td>
// //                                     <Link to={`/book/${book._id}`}>
// //                                         {book.price}
// //                                     </Link>
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             )}
// //         </div>
// //     );
// // }

// // // export default BookList;

// // // import React, { useState, useEffect } from 'react';
// // // import { fetchAllBooks } from '../../api';
// // // import { Link } from 'react-router-dom';
// // // import './BookList.css';

// // // function BookList() {
// // //     const [books, setBooks] = useState([]);
// // //     const [page, setPage] = useState(1); // New state for current page
// // //     const [error, setError] = useState(null);

// // //     useEffect(() => {
// // //         fetchBooks(page);
// // //     }, [page]);

// // //     const fetchBooks = (pageNumber) => {
// // //         console.log("Fetching books for page:", pageNumber);
// // //         fetchAllBooks(pageNumber)
// // //             .then(response => {
// // //                 if (response && response.data) {
// // //                     setBooks(response.data);
// // //                 } else {
// // //                     setError("Unexpected response format from server.");
// // //                 }
// // //             })
// // //             .catch(err => {
// // //                 setError("Error fetching books");
// // //             });
// // //     }

// // //     const handleNext = () => {
// // //         setPage(prevPage => prevPage + 1);
// // //     }

// // //     const handlePrevious = () => {
// // //         if (page > 1) {
// // //             setPage(prevPage => prevPage - 1);
// // //         }
// // //     }

// // //     if (error) {
// // //         return <div className="book-list">Error: {error}</div>;
// // //     }

// // //     return (
// // //         <div className="book-list">
// // //             {books.length === 0 ? (
// // //                 <div>No books available.</div>
// // //             ) : (
// // //                 <table className="bookTable">
// // //                     <thead>
// // //                         <tr>
// // //                             <th>Book ID</th>
// // //                             <th>Name</th>
// // //                             <th>Price</th>
// // //                         </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                         {books.map(book => (
// // //                             <tr key={book._id}>
// // //                                 <td>
// // //                                     <Link to={`/book/${book._id}`}>
// // //                                         {book.bookID}
// // //                                     </Link>
// // //                                 </td>
// // //                                 <td>
// // //                                     <Link to={`/book/${book._id}`}>
// // //                                         {book.title}
// // //                                     </Link>
// // //                                 </td>
// // //                                 <td>
// // //                                     <Link to={`/book/${book._id}`}>
// // //                                         {book.price}
// // //                                     </Link>
// // //                                 </td>
// // //                             </tr>
// // //                         ))}
// // //                     </tbody>
// // //                 </table>
// // //             )}
// // //             <div className="pagination-buttons">
// // //                 <button onClick={handlePrevious}>Previous</button>
// // //                 <button onClick={handleNext}>Next</button>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default BookList;
// // // ========================================================
// // // import React, { useState, useEffect } from 'react';
// // // import { fetchAllBooks } from '../../api';
// // // import { Link } from 'react-router-dom';
// // // import './BookList.css';

// // // function BookList() {
// // //     const [books, setBooks] = useState([]);
// // //     const [page, setPage] = useState(1);
// // //     const [error, setError] = useState(null);

// // //     useEffect(() => {
// // //         fetchBooks();
// // //     }, [page]);

// // //     const fetchBooks = async () => {
// // //         try {
// // //             const response = await fetchAllBooks(page);
// // //             if (response && response.data) {
// // //                 setBooks(response.data);
// // //             } else {
// // //                 setError("Unexpected response format from server.");
// // //             }
// // //         } catch (err) {
// // //             setError("Error fetching books");
// // //         }
// // //     }

// // //     return (
// // //         <div className="book-list">
// // //             {books.length === 0 ? (
// // //                 <div>No books available.</div>
// // //             ) : (
// // //                 <table className="bookTable">
// // //                     <thead>
// // //                         <tr>
// // //                             <th>Book ID</th>
// // //                             <th>Name</th>
// // //                             <th>Price</th>
// // //                         </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                         {books.map(book => (
// // //                             <tr key={book._id}>
// // //                                 <td>
// // //                                     <Link to={`/book/${book._id}`}>
// // //                                         {book.bookID}
// // //                                     </Link>
// // //                                 </td>
// // //                                 <td>
// // //                                     <Link to={`/book/${book._id}`}>
// // //                                         {book.title}
// // //                                     </Link>
// // //                                 </td>
// // //                                 <td>
// // //                                     <Link to={`/book/${book._id}`}>
// // //                                         {book.price}
// // //                                     </Link>
// // //                                 </td>
// // //                             </tr>
// // //                         ))}
// // //                     </tbody>
// // //                 </table>
// // //             )}
// // //             <div className="pagination-buttons">
// // //                 {page > 1 && <button onClick={() => setPage(prev => prev - 1)}>Previous</button>}
// // //                 <button onClick={() => setPage(prev => prev + 1)}>Next</button>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default BookList;

// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import './BookList.css';

// // function BookList() {
// //     const [books, setBooks] = useState([]);
// //     const [page, setPage] = useState(1);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         fetchBooks();
// //     }, [page]);

// //     const fetchBooks = async () => {
// //         try {
            
// //             const response = await fetchAllBooks((page - 1) * 10, 10);
// //             if (response && response.data) {
// //                 setBooks(response.data);
// //             } else {
// //                 setError("Unexpected response format from server.");
// //             }
// //         } catch (err) {
// //             setError("Error fetching books");
// //         }
// //     }

// //     return (
// //         <div className="book-list">
// //             {books.length === 0 ? (
// //                 <div>No books available.</div>
// //             ) : (
// //                 <table className="bookTable">
// //                     <thead>
// //                         <tr>
// //                             <th>Book ID</th>
// //                             <th>Name</th>
// //                             <th>Price</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody>
// //                         {books.map(book => (
// //                             <tr key={book._id}>
// //                                 <td>
// //                                     <Link to={`/book/${book._id}`}>
// //                                         {book.bookID}
// //                                     </Link>
// //                                 </td>
// //                                 <td>
// //                                     <Link to={`/book/${book._id}`}>
// //                                         {book.title}
// //                                     </Link>
// //                                 </td>
// //                                 <td>
// //                                     <Link to={`/book/${book._id}`}>
// //                                         {book.price}
// //                                     </Link>
// //                                 </td>
// //                             </tr>
// //                         ))}
// //                     </tbody>
// //                 </table>
// //             )}
// //             <div className="pagination-buttons">
// //                 {page > 1 && <button onClick={() => setPage(prev => prev - 1)}>Previous</button>}
// //                 <button onClick={() => setPage(prev => prev + 1)}>Next</button>
// //             </div>
// //         </div>
// //     );
// // }

// // export default BookList;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios'; // Assuming you're using axios for HTTP requests
// // import { Link } from 'react-router-dom';
// // import './BookList.css';

// // function BookList() {
// //     const [books, setBooks] = useState([]);
// //     const [page, setPage] = useState(1);
// //     const [error, setError] = useState(null);
// //     const LIMIT = 10;

// //     useEffect(() => {
// //         fetchBooks();
// //     }, [page]);

// //     const fetchBooks = async () => {
// //         try {
// //             const response = await axios.get(`http://localhost:3000/api/books?start=${(page - 1) * LIMIT}&limit=${LIMIT}`);
// //             if (response && response.data) {
// //                 setBooks(response.data);
// //             } else {
// //                 setError("Unexpected response format from server.");
// //             }
// //         } catch (err) {
// //             setError("Error fetching books");
// //         }
// //     }

// //     return (
// //         <div className="book-list">

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './BookList.css';

// function BookList() {
//     const [books, setBooks] = useState([]);
//     const [totalBooks, setTotalBooks] = useState(0);
//     const [page, setPage] = useState(1);
//     const [error, setError] = useState(null);
//     const LIMIT = 10;

//     useEffect(() => {
//         fetchBooks();
//         fetchTotalBooks();
//     }, [page]);

//     const fetchBooks = async () => {
//         try {
//             const response = await axios.get(`http://localhost:3000/api/books?start=${(page - 1) * LIMIT}&limit=${LIMIT}`);
//             if (response && response.data) {
//                 setBooks(response.data);
//             } else {
//                 setError("Unexpected response format from server.");
//             }
//         } catch (err) {
//             setError("Error fetching books");
//         }
//     }

//     const fetchTotalBooks = async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/api/books/count');
//             if (response && response.data) {
//                 setTotalBooks(response.data.count);
//             }
//         } catch (err) {
//             console.error("Error fetching total book count:", err);
//         }
//     }

//     const totalPages = Math.ceil(totalBooks / LIMIT);

//     return (
//         <div className="book-list">

//             {books.length === 0 ? (
//                 <div>No books available.</div>
//             ) : (
//                 <table className="bookTable">
//                     <thead>
//                         <tr>
//                             <th>Book ID</th>
//                             <th>Name</th>
//                             <th>Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {books.map(book => (
//                             <tr key={book._id}>
//                                 <td>
//                                     <Link to={`/book/${book._id}`}>
//                                         {book.bookID}
//                                     </Link>
//                                 </td>
//                                 <td>
//                                     <Link to={`/book/${book._id}`}>
//                                         {book.title}
//                                     </Link>
//                                 </td>
//                                 <td>
//                                     <Link to={`/book/${book._id}`}>
//                                         {book.price}
//                                     </Link>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}

// <div className="pagination-buttons">
//                 {page > 1 && <button onClick={() => setPage(prev => prev - 1)}>Previous</button>}
//                 {page < totalPages && <button onClick={() => setPage(prev => prev + 1)}>Next</button>}
//             </div>
//         </div>
//     );
// }

//             {/* <div className="pagination-buttons">
//                 {page > 1 && <button onClick={() => setPage(prev => prev - 1)}>Previous</button>}
//                 <button onClick={() => setPage(prev => prev + 1)}>Next</button>
//             </div>
//         </div>
//     );
// } */}

// export default BookList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BookList.css';

function BookList() {
    const [books, setBooks] = useState([]);
    const [totalBooks, setTotalBooks] = useState(0);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const LIMIT = 10;

    useEffect(() => {
        fetchBooks();
        fetchTotalBooks();
    }, [page]);

    const fetchBooks = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/books?start=${(page - 1) * LIMIT}&limit=${LIMIT}`);
            if (response && response.data) {
                setBooks(response.data);
            } else {
                setError("Unexpected response format from server.");
            }
        } catch (err) {
            setError("Error fetching books");
        }
    }

    const fetchTotalBooks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/books/count');
            if (response && response.data) {
                setTotalBooks(response.data.count);
            }
        } catch (err) {
            console.error("Error fetching total book count:", err);
        }
    }

    const totalPages = Math.ceil(totalBooks / LIMIT);

    return (
        <div className="book-list">
            <ul>
                {books.map(book => (
                    <li key={book._id}>
                        <Link to={`/book/${book.bookID}`}>  {/* Using bookID for linking */}
                            {book.title}
                        </Link>
                    </li>
                ))}
            </ul>
            
            <div className="pagination-buttons">
                {page > 1 && <button onClick={() => setPage(prev => prev - 1)}>Previous</button>}
                {page < totalPages && <button onClick={() => setPage(prev => prev + 1)}>Next</button>}
            </div>
        </div>
    );
}

export default BookList;
