import { Router, Request, Response } from 'express';
import find from '../model/index';

interface BookPublicationDate {
  year: number,
  month?: number,
}

interface Book {
  title: string,
  author: string,
  country: string,
  language?: string,
  publicationDate: BookPublicationDate,
}

interface BooksList {
  [index: number]: Book,
}

const router = Router();

//
router.get('/', async (req: Request, res: Response) => {
  try {
    const books: BooksList = await find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
