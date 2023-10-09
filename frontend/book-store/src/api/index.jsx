import axios from 'axios';

// backend server is running on http://localhost:3000
const api = axios.create({
    baseURL: "http://localhost:3000/api"
});

// interceptors for handling responses and errors uniformly
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // error handelling
        console.error('API Error:', error);
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error.message);
    }
);

// fetch all books
export const fetchAllBooks = () => {
    return api.get('/books');
};

// fetch a single book by its ID
export const fetchBookById = (id) => {
    return api.get(`/books/${id}`);
};

// add a new book
export const addBook = (bookData) => {
    return api.post('/books', bookData);
};

// update a book
export const updateBook = (id, bookData) => {
    return api.put(`/books/${id}`, bookData);
};

// delete a book
export const deleteBook = (id) => {
    return api.delete(`/books/${id}`);
};