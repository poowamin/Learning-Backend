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

module.exports = { getAllBook, addBook }