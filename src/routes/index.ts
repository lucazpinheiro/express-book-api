/* eslint-disable no-console */
import {
  Router,
  Request,
  Response,
  NextFunction,
} from 'express';
import BookModel from '../models/book';
import logger from '../helpers/logger';

const router = Router();

async function getBook(req: Request, res: Response, next: NextFunction) {
  let book;
  try {
    book = await BookModel.findById(req.params.bookid);
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
router.get('/', async (req: Request, res: Response) => {
  try {
    const books = await BookModel.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// gettting by id
router.get('/:bookid', getBook, async (req: Request, res: Response) => {
  console.log(`get book by id: ${req.params.bookid}`);
  console.log('book data: ', res.book);
  res.send(res.book);
});

// creating new book
router.post('/', async (req: Request, res: Response) => {
  console.log('create new book');
  console.log('new book data: ', req.body);
  const book = new BookModel({
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
router.patch('/:bookid', getBook, async (req, res) => {
  console.log(`update book by id: ${req.params.bookid}`);

  if (req.body.title != null) res.book.title = req.body.title;
  if (req.body.author != null) res.book.author = req.body.author;
  if (req.body.publicationDate != null) {
    if (req.body.publicationDate.year != null) {
      res.book.publicationDate.year = req.body.publicationDate.year;
    }
    if (req.body.publicationDate.month != null) {
      res.book.publicationDate.month = req.body.publicationDate.month;
    }
  }
  try {
    const updateBook = await res.book.save();
    res.json(updateBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// deleting by id
router.delete('/:bookid', getBook, async (req: Request, res: Response) => {
  console.log(`delete book by id: ${req.params.bookid}`);
  try {
    await res.book.remove();
    res.json({ message: 'Deleted Book' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
