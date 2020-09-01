import {
  Router,
  Request,
  Response,
} from 'express';
import BookModel from '../models/index';
import logger from '../helpers/logger';

const router = Router();

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
router.get('/:bookid', async (req: Request, res: Response) => {
  logger(`get book by id: ${req.params.bookid}`);
  try {
    const book = await BookModel.findById(req.params.bookid);
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// creating new book
router.post('/', async (req: Request, res: Response) => {
  logger('create new book');
  logger(req.body);
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
router.put('/:bookid', async (req, res) => {
  logger(`update book by id: ${req.params.bookid}`);
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(req.params.bookid, { ...req.body });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// deleting by id
router.delete('/:bookid', async (req: Request, res: Response) => {
  logger(`delete book by id: ${req.params.bookid}`);
  try {
    await BookModel.findByIdAndDelete(req.params.bookid);
    res.json({ message: 'Deleted Book' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
