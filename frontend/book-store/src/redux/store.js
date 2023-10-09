import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './path_to_bookReducer'; // Adjust the path

const rootReducer = combineReducers({
    books: bookReducer,
    // ... we can add other reducers
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
