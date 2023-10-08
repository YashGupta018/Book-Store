const initialState = {
    books: [],
    loading: false,
    error: null
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_BOOKS_SUCCESS':
            return { ...state, loading: false, books: action.payload };
        case 'FETCH_BOOKS_FAILURE':
            return { ...state, loading: false, error: action.error };
        // ... we can add other action types as needed
        default:
            return state;
    }
};

export default bookReducer;
