const express = require('express');
const Books = require('../models/books');

const router = express.Router();

// eslint-disable-next-line consistent-return
async function getBook(req, res, next) {
  let book;
  try {
    book = await Books.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: 'Cannot find book' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.book = book;
  next();
}

// getting all
router.get('/', async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// getting by id
router.get('/:id', getBook, async (req, res) => {
  res.send(res.book);
});

// creating one
router.post('/', async (req, res) => {
  const book = new Books({
    title: req.body.title,
    author: req.body.author,
    publicationDate: req.body.publicationDate,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// updating by id
router.patch('/:id', getBook, async (req, res) => {
  console.log(req.body);
  if (req.body.title != null) res.book.title = req.body.title;
  if (req.body.author != null)res.book.author = req.body.author;
  if (req.body.publicationDate != null) {
    // eslint-disable-next-line max-len
    if (req.body.publicationDate.year != null) res.book.publicationDate.year = req.body.publicationDate.year;
    // eslint-disable-next-line max-len
    if (req.body.publicationDate.month != null) res.book.publicationDate.month = req.body.publicationDate.month;
  }
  try {
    const updateBook = await res.book.save();
    res.json(updateBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  // res.status(200).json({ message: 'estamos vendo isso ai' });
});

// deleting by id
router.delete('/:id', getBook, async (req, res) => {
  try {
    await res.book.remove();
    res.json({ message: 'Deleted Book' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
