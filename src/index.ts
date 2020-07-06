import express from 'express';
import cors from 'cors';
import bookRouter from './routes/index';

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bookRouter);

app.listen(PORT, () => console.log(`server stared at http://localhost:${PORT}`));
