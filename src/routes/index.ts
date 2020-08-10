import {
  Router,
  Request,
  Response,
  NextFunction,
} from 'express';
import {
  findAll,
  findByID,
  createBook,
  updateByID,
} from '../model/index';
import {
  IBookPublicationDate,
  IBooksList,
  IBook,
} from '../interfaces';

const router = Router();

async function getBook(req: Request, res: Response, next: NextFunction) {
  let book;
  try {
    book = findByID(Number(req.params.bookid));
    // book = await Books.findById(req.params.id);
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
    const books: IBooksList = findAll();
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

// creating new register
router.post('/', async (req: Request, res: Response) => {
  console.log('create new book');
  console.log('new book data: ', req.body);
  // const book = new Books({
  //   title: req.body.title,
  //   author: req.body.author,
  //   publicationDate: req.body.publicationDate,
  // });
  const book: IBook = {
    title: req.body.title,
    author: req.body.author,
    publicationDate: req.body.publicationDate,
  };
  try {
    // const newBook = await book.save();
    const newBook = createBook(book);
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch('/:bookid', getBook, async (req, res) => {
  console.log(`update book by id: ${req.params.bookid}`);
  console.log('updated book data: ', res.book);

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
    // const updateBook = await res.book.save();
    const updateBook = updateByID(number(req.params.bookid), res.book);
    res.json(updateBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

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
