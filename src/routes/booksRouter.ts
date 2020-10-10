import { Router } from 'express';
import { BookController } from '../controllers';

const bookRouter = Router();

bookRouter.get('/', BookController.getAllBook);

bookRouter.get('/:bookid', BookController.getBookByID);

bookRouter.post('/', BookController.createBook);

bookRouter.put('/:bookid', BookController.updateBook);

bookRouter.delete('/:bookid', BookController.deleteBook);

export default bookRouter;
