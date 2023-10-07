const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'N/a',
    },
    price: {
        type: Number
    },
    author: {
        type: String,
        default: 'N/a',
    },
});

const BookModel = mongoose.model('bookModel', bookSchema);

module.exports = BookModel;