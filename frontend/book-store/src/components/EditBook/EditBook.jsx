// import React, { useState, useEffect } from 'react';
// import { fetchBookById, updateBook } from '../../api';
// import { useParams } from 'react-router-dom';
// import './EditBook.css';

// function EditBook() {
//     const [bookData, setBookData] = useState({
//         title: '',
//         author: '',
//         // other book fields
//     });
//     const [error, setError] = useState(null);
//     const { id } = useParams(); // getting the book id from the route parameters

//     useEffect(() => {
//         fetchBookById(id)
//             .then(response => {
//                 setBookData(response.data);
//             })
//             .catch(err => {
//                 setError("Error fetching book details");
//             });
//     }, [id]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         updateBook(id, bookData)
//             .then(response => {
//                 // this will handle successful book update and redirect or show a message
//             })
//             .catch(err => {
//                 setError("Error updating book");
//             });
//     };

//     return (
//         <div className="edit-book">
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text" 
//                     value={bookData.title} 
//                     onChange={e => setBookData({ ...bookData, title: e.target.value })}
//                     placeholder="Book Title"
//                 />
//                 {/* we can add other input fields for book details */}
//                 <button type="submit">Update Book</button>
//             </form>
//             {error && <div>{error}</div>}
//         </div>
//     );
// }

// export default EditBook;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './EditBook.css';
// import { useParams } from 'react-router-dom';

// // function UpdateBook() {
// //     const [bookData, setBookData] = useState({
// //         title: '',
// //         authors: '',
// //         genre: '',
// //         bookID: ''  // Assuming we have the bookID
// //     });
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         const fetchBook = async () => {
// //             try {
// //                 const response = await axios.get(`http://localhost:3000/api/books/${bookData.bookID}`);
// //                 setBookData(response.data);
// //             } catch (err) {
// //                 setError("Error fetching book details");
// //             }
// //         };
// //         fetchBook();
// //     }, [bookData.bookID]);
// function UpdateBook() {
//     const { id } = useParams(); // Extracting the book ID from the route

//     const [bookData, setBookData] = useState({
//         title: '',
//         authors: '',
//         genre: ''
//     });
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBook = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3000/api/books/${id}`);
//                 setBookData(response.data);
//             } catch (err) {
//                 setError("Error fetching book details");
//             }
//         };
//         fetchBook();
//     }, [id]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const token = localStorage.getItem('authToken');
//             const headers = {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             };

//             const response = await axios.put(`http://localhost:3000/api/books/${bookData.bookID}`, bookData, { headers: headers });
//             console.log('API Response:', response);

//         } catch (error) {
//             setError("Error updating book");
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="update-book">
//             <form className='container' onSubmit={handleSubmit}>
//                 <h3>Update Book</h3>

//                 {error && <div className="alert alert-danger">{error}</div>}

                // <div className="mb-3">
                //     <label>Title</label>
                //     <input
                //         type="text"
                //         className="form-control"
                //         placeholder="Full name"
                //         value={bookData.title}
                //         onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                //     />
                // </div>

                // <div className="mb-3">
                //     <label>Author</label>
                //     <input
                //         type="text"
                //         className="form-control"
                //         placeholder="Enter author"
                //         value={bookData.authors}
                //         onChange={(e) => setBookData({ ...bookData, authors: e.target.value })}
                //     />
                // </div>

                // <div className="mb-3">
                //     <label>Genre</label>
                //     <input
                //         type="text"
                //         className="form-control"
                //         placeholder="Genre"
                //         value={bookData.genre}
                //         onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
                //     />
                // </div>

                // <div className="d-grid">
                //     <button type="submit" className="btn btn-primary">
                //         Update Book
                //     </button>
                // </div>
                // <br />
//             </form>
//         </div>
//     );
// }

// export default EditBook;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './EditBook.css';
// import { useParams } from 'react-router-dom';

// function EditBook() {
//     const { id } = useParams(); // Extracting the book ID from the route

//     const [bookData, setBookData] = useState({
//         title: '',
//         authors: '',
//         genre: ''
//     });
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBook = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3000/api/books/${id}`);
//                 setBookData(response.data);
//             } catch (err) {
//                 setError("Error fetching book details");
//             }
//         };
//         fetchBook();
//     }, [id]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const token = localStorage.getItem('authToken');
//             const headers = {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             };

//             const response = await axios.put(`http://localhost:3000/api/books/${id}`, bookData, { headers: headers });
//             console.log('API Response:', response);

//         } catch (error) {
//             setError("Error updating book");
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="update-book">
//             <form className='container' onSubmit={handleSubmit}>
//                 <h3>Update Book</h3>

//                 {error && <div className="alert alert-danger">{error}</div>}

//                 <div className="mb-3">
//                     <label>Title</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Full name"
//                         value={bookData.title}
//                         onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label>Author</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter author"
//                         value={bookData.authors}
//                         onChange={(e) => setBookData({ ...bookData, authors: e.target.value })}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label>Genre</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Genre"
//                         value={bookData.genre}
//                         onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
//                     />
//                 </div>

//                 <div className="d-grid">
//                     <button type="submit" className="btn btn-primary">
//                         Update Book
//                     </button>
//                 </div>
//                 <br />

//             </form>
//         </div>
//     );
// }

// export default EditBook;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './EditBook.css';
// import { useParams } from 'react-router-dom';

// function EditBook() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [bookData, setBookData] = useState({
//         title: '',
//         authors: '',
//         genre: ''
//     });
//     const [error, setError] = useState(null);
//     const { id } = useParams();

//     useEffect(() => {
//         if (id) {
//             const fetchBook = async () => {
//                 try {
//                     const response = await axios.get(`http://localhost:3000/api/books/${id}`);
//                     setBookData(response.data);
//                 } catch (err) {
//                     setError("Error fetching book details");
//                 }
//             };
//             fetchBook();
//         }
//     }, [id]);

//     const handleSearch = async () => {
//         try {
//             const response = await axios.get(`http://localhost:3000/api/books?title=${searchQuery}`);
//             setSearchResults(response.data);
//         } catch (err) {
//             setError("Error searching for books");
//         }
//     };

//     const selectBook = async (bookId) => {
//         try {
//             const response = await axios.get(`http://localhost:3000/api/books/${bookId}`);
//             setBookData(response.data);
//         } catch (err) {
//             setError("Error fetching book details");
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const token = localStorage.getItem('authToken');
//             const headers = {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             };

//             const response = await axios.put(`http://localhost:3000/api/books/${bookData._id}`, bookData, { headers: headers });
//             console.log('API Response:', response);

//         } catch (error) {
//             setError("Error updating book");
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="update-book">
//             <form className='container' onSubmit={handleSubmit}>
//                 <h3>Update Book</h3>

//                 {error && <div className="alert alert-danger">{error}</div>}

//                 {/* Search Field */}
//                 <div className="mb-3">
//                     <label>Search Book to Edit</label>
//                     <input 
//                         type="text" 
//                         className="form-control" 
//                         placeholder="Search by book title"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                     <button type="button" onClick={handleSearch}>Search</button>
//                     {searchResults.map(book => (
//                         <div key={book._id} onClick={() => selectBook(book._id)}>
//                             {book.title}
//                         </div>
//                     ))}
//                 </div>

//                 <div className="mb-3">
//                     <label>Title</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Full name"
//                         value={bookData.title}
//                         onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label>Author</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Enter author"
//                         value={bookData.authors}
//                         onChange={(e) => setBookData({ ...bookData, authors: e.target.value })}
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label>Genre</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Genre"
//                         value={bookData.genre}
//                         onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
//                     />
//                 </div>

//             </form>
//         </div>
//     );
// }

// export default EditBook;


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
