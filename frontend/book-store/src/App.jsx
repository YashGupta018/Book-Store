import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';
import AppLayout from './components/AppLayout/AppLayout.jsx';
import BookList from './components/BookList/BookList.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
import AddBook from './components/AddBook/AddBook.jsx';
import EditBook from './components/EditBook/EditBook.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {
    console.log("App component rendered");

    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/books" element={<BookList />} />
                    <Route path="/book/:id" element={<BookDetail />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="/edit-book/:id" element={<EditBook />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" component={Cart} />
                </Routes>
            </AppLayout>
        </Router>
    );
}

export default App;
