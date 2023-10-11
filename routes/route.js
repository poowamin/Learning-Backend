const express = require('express');
const { getAllBook, addBook, updateBookById, deleteBookById, getBookById } = require('../controllers/bookController');

const router = express.Router();

router.get('/books', getAllBook);
router.post('/books', addBook);
router.get('/books/:id', getBookById);
router.put('/books/:id', updateBookById);
router.delete('/books/:id', deleteBookById);

module.exports = router;