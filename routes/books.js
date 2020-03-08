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
  if (req.book.title != null) res.book.title = req.book.title;
  if (req.book.author != null)res.book.author = req.book.author;
  if (req.book.publicationDate != null) {
    // eslint-disable-next-line max-len
    if (req.book.publicationDate.year != null) res.book.publicationDate.year = req.book.publicationDate.year;
    // eslint-disable-next-line max-len
    if (req.book.publicationDate.month != null) res.book.publicationDate.month = req.book.publicationDate.month;
  }
  try {
    const updateBook = await res.book.save();
    res.json(updateBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
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
