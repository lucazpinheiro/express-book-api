import { Router } from 'express';
// import UserController from './controllers/UserController';

const router = Router();

// routes.get('/users', UserController.index);
// routes.post('/users', UserController.create);

// getting all
router.get('/', async (req, res) => {
  try {
    // const books = await Books.find();
    res.json({ message: 'hello world' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// getting by id
// router.get('/:id', getBook, async (req, res) => {
//   console.log(`get book by id: ${req.params.id}`);
//   console.log('book data: ', res.book);
//   res.send(res.book);
// });

export default router;
