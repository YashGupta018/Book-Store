import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UpdateBook.css';

// function UpdateBook() {
//     const [bookData, setBookData] = useState({
//         title: '',
//         authors: '',
//         genre: '',
//         bookID: ''  // Assuming we have the bookID
//     });
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBook = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3000/api/books/${bookData.bookID}`);
//                 setBookData(response.data);
//             } catch (err) {
//                 setError("Error fetching book details");
//             }
//         };
//         fetchBook();
//     }, [bookData.bookID]);
function UpdateBook() {
    const { id } = useParams(); // Extracting the book ID from the route

    const [bookData, setBookData] = useState({
        title: '',
        authors: '',
        genre: ''
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/books/${id}`);
                setBookData(response.data);
            } catch (err) {
                setError("Error fetching book details");
            }
        };
        fetchBook();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('authToken');
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };

            const response = await axios.put(`http://localhost:3000/api/books/${bookData.bookID}`, bookData, { headers: headers });
            console.log('API Response:', response);

        } catch (error) {
            setError("Error updating book");
            console.error('Error:', error);
        }
    };

    return (
        <div className="update-book">
            <form className='container' onSubmit={handleSubmit}>
                <h3>Update Book</h3>

                {error && <div className="alert alert-danger">{error}</div>}

                <div className="mb-3">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        value={bookData.title}
                        onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Author</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter author"
                        value={bookData.authors}
                        onChange={(e) => setBookData({ ...bookData, authors: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Genre</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Genre"
                        value={bookData.genre}
                        onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Update Book
                    </button>
                </div>
                <br />
            </form>
        </div>
    );
}

export default UpdateBook;
