const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { authenticate } = require('../middlewares/auth');

// get all books - cust.
router.get('/', (req, res, next) => {
    console.log("Fetching all books...");
    next();
}, bookController.getAllBooks);

// get a specific book by ID - cust.
router.get('/:id', (req, res, next) => {
    console.log(`Fetching book with ID: ${req.params.id}`);
    next();
}, bookController.getBookById);

// adding a new book - admin only
router.post('/', authenticate, (req, res, next) => {
    console.log("Attempting to add a new book...");
    next();
}, bookController.addBook);

// updating a book by ID - admin only
router.put('/:id', authenticate, (req, res, next) => {
    console.log(`Attempting to update book with ID: ${req.params.id}`);
    next();
}, bookController.updateBook);

// deleting a book by ID - admin only
router.delete('/:id', authenticate, (req, res, next) => {
    console.log(`Attempting to delete book with ID: ${req.params.id}`);
    next();
}, bookController.deleteBook);

module.exports = router;
