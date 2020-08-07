import { Router, Request, Response, NextFunction } from 'express';
import { find } from '../model/index';

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

async function getBook(req: Request, res: Response, next: NextFunction) {
  // let book;
  // try {
  //   book = await Books.findById(req.params.id);
  //   if (book == null) {
  //     return res.status(404).json({ message: 'Cannot find book' });
  //   }
  // } catch (err) {
  //   return res.status(500).json({ message: err.message });
  // }

  // res.book = book;
  // next();
}


// getting all
router.get('/', async (req: Request, res: Response) => {
  try {
    const books: BooksList = await find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// gettting by id
// router.get('/:bookid', getBook, async (req: Request, res: Response) => {
//   console.log(`get book by id: ${req.params.id}`);
//   console.log('book data: ', res.book);
//   res.send(res.book);
// });

// creating new register
router.post('/', async (req: Request, res: Response) => {
  console.log('create new book');
  console.log('new book data: ', req.body);
  // const book = new Books({
  //   title: req.body.title,
  //   author: req.body.author,
  //   publicationDate: req.body.publicationDate,
  // });
  // try {
  //   const newBook = await book.save();
  //   res.status(201).json(newBook);
  // } catch (err) {
  //   res.status(400).json({ message: err.message });
  // }
});

// router.patch('/:bookid', getBook, async (req, res) => {
//   console.log(`update book by id: ${req.params.id}`);
//   console.log('updated book data: ', res.book);
// });

// deleting by id
router.delete('/:id', getBook, async (req: Request, res: Response) => {
  console.log(`delete book by id: ${req.params.id}`);
  // try {
  //   await res.book.remove();
  //   res.json({ message: 'Deleted Book' });
  // } catch (err) {
  //   res.status(500).json({ message: err.message });
  // }
});

export default router;
