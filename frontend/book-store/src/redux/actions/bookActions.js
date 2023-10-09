import { fetchAllBooks } from '../api';

// action Types
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

// action Creators
export const fetchBooksRequest = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    };
};

export const fetchBooksSuccess = (books) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: books
    };
};

export const fetchBooksFailure = (error) => {
    return {
        type: FETCH_BOOKS_FAILURE,
        error: error
    };
};

// thunk action creator for fetching books
export const fetchBooks = () => {
    return (dispatch) => {
        dispatch(fetchBooksRequest());
        fetchAllBooks()
            .then(response => {
                dispatch(fetchBooksSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchBooksFailure(error.message));
            });
    };
};
