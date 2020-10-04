import {
  Request,
  Response,
} from 'express';
import BookModel from '../models/index';
import logger from '../helpers/logger';

export default {
  async getAllBook(req: Request, res: Response) {
    try {
      const books = await BookModel.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async getBookByID(req: Request, res: Response) {
    logger(`get book by id: ${req.params.bookid}`);
    try {
      const book = await BookModel.findById(req.params.bookid);
      res.json(book);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async createBook(req: Request, res: Response) {
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
  },

  async updateBook(req: Request, res: Response) {
    logger(`update book by id: ${req.params.bookid}`);
    try {
      const updatedBook = await BookModel.findByIdAndUpdate(req.params.bookid, { ...req.body });
      res.json(updatedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async deleteBook(req: Request, res: Response) {
    logger(`delete book by id: ${req.params.bookid}`);
    try {
      await BookModel.findByIdAndDelete(req.params.bookid);
      res.json({ message: 'Deleted Book' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};
