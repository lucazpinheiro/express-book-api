import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './routes/index';
import logger from './helpers/logger';

const PORT = 5000;

const MONGO_URI = 'mongodb://localhost/booksAPI';

mongoose.connect(MONGO_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => logger(err));
db.once('open', () => logger('connected to databse'));

const app = express();

app.use(cors());
app.use(express.json());
app.use('/books', router);

app.listen(PORT, () => logger(`server stared at http://localhost:${PORT}`));
