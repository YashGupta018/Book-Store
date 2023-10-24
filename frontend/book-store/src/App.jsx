import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Component imports
import WelcomePage from './components/WelcomePage/WelcomePage';
import AppLayout from './components/AppLayout/AppLayout.jsx';
import BookList from './components/BookList/BookList.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
import AddBook from './components/AddBook/AddBook.jsx';
import EditBook from './components/EditBook/EditBook.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Cart from './components/Cart/Cart.jsx';
import AdminDashboard from './components/AdminDashboard/AdminDashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import AllOrders from './components/AllOrders/AllOrders.jsx'; 
import AllUsers from './components/AllUsers/AllUsers.jsx';
import UpdateUserRole from './components/UpdateUserRoleas/UpdateUserRole.jsx';
import DeleteBook from './components/DeleteBook/DeleteBook.jsx';
import DeleteUser from './components/DeleteUser/DeleteUser.jsx';
import UserPage from './components/UserPage/UserPage';


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
                    <Route path="/edit-book" element={<EditBook />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                    <Route path="/admin/orders" element={<ProtectedRoute><AllOrders /></ProtectedRoute>} /> 
                    <Route path="/admin/users" element={<ProtectedRoute><AllUsers /></ProtectedRoute>} />
                    <Route path="/admin/updateuserrole" element={<ProtectedRoute><UpdateUserRole /></ProtectedRoute>} />
                    <Route path="/delete-book" element={<ProtectedRoute><DeleteBook /></ProtectedRoute>} />
                    <Route path="/delete-user" element={<ProtectedRoute><DeleteUser /></ProtectedRoute>} />
                    <Route path="/user" element={<UserPage />} />
                </Routes>
            </AppLayout>
        </Router>
    );
}

export default App;
