import React, { useState } from 'react';
import axios from 'axios';
import './DeleteBook.css';

function DeleteBook() {
    const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('title'); // Default search by title
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('authToken');

    // const fetchBook = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:5173/api/books/search?${searchType}=${search}`);
    //         setBook(response.data);
    //     } catch (err) {
    //         setError("Error fetching book details");
    //     }
    // };

    const fetchBook = async () => {
        try {
            let response;
            if (searchType === 'title') {
                response = await axios.get(`http://localhost:3000/api/books?title=${search}`);
            } else if (searchType === 'id') {
                response = await axios.get(`http://localhost:3000/api/books/object/${search}`);
            }
            setBook(response.data);
        } catch (err) {
            setError("Error fetching book details");
        }
    };

    // const handleDelete = async () => {
    //     try {
    //         const headers = {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         };
    //         await axios.delete(`http://localhost:3000/api/books/${book._id}`, { headers });
    //         setBook(null);  // Clear the book data after deletion
    //     } catch (error) {
    //         setError("Error deleting book");
    //     }
    // };

    const handleDelete = async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
    
            console.log("Deleting book with ID:", book._id); // Log book ID
    
            await axios.delete(`http://localhost:3000/api/books/${book._id}`, { headers });
            setBook(null);  // Clear the book data after deletion
        } catch (error) {
            console.error("Error deleting book:", error.response); // Log complete error response
            setError("Error deleting book");
        }
    };    

    return (
        <div className="delete-book">
            <form className='container' onSubmit={(e) => { e.preventDefault(); fetchBook(); }}>
                <h3>Delete Book</h3>

                {error && <div className="alert alert-danger">{error}</div>}

                <div className="mb-3">
                    <label>Search by</label>
                    {/* <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                        <option value="title">Title</option>
                        <option value="_id">Book ID</option>
                    </select> */}
                    <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                        <option value="title">Title</option>
                        <option value="id">ObjectID</option>
                    </select>
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={searchType === 'title' ? "Book Title" : "Book ID"}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Search Book
                    </button>
                </div>
            </form>

            {book && (
                <div>
                    <p><strong>Title:</strong> {book.title}</p>
                    <p><strong>Author:</strong> {book.authors}</p>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <button onClick={handleDelete} className="btn btn-danger">
                        Delete Book
                    </button>
                </div>
            )}
        </div>
    );
}

export default DeleteBook;

// below code working with name/title above code working with ObjectID 

// import React, { useState } from 'react';
// import axios from 'axios';
// import './DeleteBook.css';

// function DeleteBook() {
//     const [search, setSearch] = useState('');
//     const [searchType, setSearchType] = useState('title'); // Default search by title
//     const [book, setBook] = useState(null);
//     const [error, setError] = useState(null);
//     const token = localStorage.getItem('authToken');

//     // const fetchBook = async () => {
//     //     try {
//     //         let response;
//     //         if (searchType === 'title') {
//     //             response = await axios.get(`http://localhost:3000/api/books?title=${search}`);
//     //         } else if (searchType === 'id') {
//     //             response = await axios.get(`http://localhost:3000/api/books/${search}`);
//     //         }

//     //         if (Array.isArray(response.data)) {
//     //             setBook(response.data[0]); // Assuming the first result is the desired book
//     //         } else {
//     //             setBook(response.data);
//     //         }
//     //     } catch (err) {
//     //         setError("Error fetching book details");
//     //     }
//     // };

//     const fetchBook = async () => {
//         try {
//             let response;
//             if (searchType === 'title') {
//                 response = await axios.get(`http://localhost:3000/api/books/search?title=${search}`);
//             } else if (searchType === 'id') {
//                 response = await axios.get(`http://localhost:3000/api/books/search?objectId=${search}`);
//             }
//             setBook(response.data);
//         } catch (err) {
//             setError("Error fetching book details");
//         }
//     };

//     const handleDelete = async () => {
//         try {
//             const headers = {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             };
//             await axios.delete(`http://localhost:3000/api/books/${book._id}`, { headers });
//             setBook(null);  // Clear the book data after deletion
//         } catch (error) {
//             setError("Error deleting book");
//         }
//     };

//     return (
//         <div className="delete-book">
//             <form className='container' onSubmit={(e) => { e.preventDefault(); fetchBook(); }}>
//                 <h3>Delete Book</h3>

//                 {error && <div className="alert alert-danger">{error}</div>}

//                 <div className="mb-3">
//                     <label>Search by</label>
//                     <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
//                         <option value="title">Title</option>
//                         <option value="id">ObjectID</option>
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder={searchType === 'title' ? "Book Title" : "Book ID"}
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                 </div>

//                 <div className="d-grid">
//                     <button type="submit" className="btn btn-primary">
//                         Search Book
//                     </button>
//                 </div>
//             </form>

//             {book && (
//                 <div>
//                     <p><strong>Title:</strong> {book.title}</p>
//                     <p><strong>Author:</strong> {book.authors}</p>
//                     <p><strong>Genre:</strong> {book.genre}</p>
//                     <button onClick={handleDelete} className="btn btn-danger">
//                         Delete Book
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default DeleteBook;
