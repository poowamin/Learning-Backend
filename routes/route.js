const express = require('express');
const { getAllBook, addBook } = require('../controllers/bookController');

const router = express.Router();

router.get('/books', getAllBook);
router.post('/books', addBook);

module.exports = router;