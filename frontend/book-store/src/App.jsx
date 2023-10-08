import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout.jsx';
import BookList from './components/BookList/BookList.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
import AddBook from './components/AddBook/AddBook.jsx';
import EditBook from './components/EditBook/EditBook.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* we can add more routes if needed */}
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
