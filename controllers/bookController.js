const BookModel = require('../models/book_model');


const getAllBook = async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).send({
      status: true, message: 'success', data: books
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: 'Internal Server Error' });
  }
}

const addBook = async (req, res) => {
  try {
    const { title, price, author } = req.body;

    const newBook = new BookModel({ title, price, author });

    const savedBook = await newBook.save();
    res.status(201).send({
      status: true, message: 'uploaded success', data: savedBook
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: 'Internal Server Error' });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await BookModel.findById(id);

    if (!book) {
      return res.status(404).send({ status: false, message: 'Book not found' });
    }
    res.status(200).send({
      status: true, message: 'success', data: book
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: 'Internal Server Error' });
  }
};

const updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, author } = req.body;

    const updatedBook = await BookModel.findByIdAndUpdate(
      id,
      { title, price, author },
      { data: true }
    );

    if (!updatedBook) {
      return res.status(404).send({ status: false, message: 'Book not found' });
    }
    res.status(200).send({ status: true, message: 'updated success' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: 'Internal Server Error' });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await BookModel.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).send({ status: false, message: 'Book not found' });
    }

    res.status(200).send({ status: true, message: 'deleted success' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ status: false, message: 'Internal Server Error' });
  }
};

module.exports = { getAllBook, addBook, getBookById, updateBookById, deleteBookById }