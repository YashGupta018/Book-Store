import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path="/" exact component={BookList} />
          <Route path="/book/:id" exact component={BookDetail} />
          <Route path="/add-book" exact component={AddBook} />
          <Route path="/edit-book/:id" exact component={EditBook} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          {/* You can add more routes as needed */}
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
