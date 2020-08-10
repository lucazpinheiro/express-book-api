import express from 'express';
import cors from 'cors';
import router from './routes/index';
import logger from './helpers/logger';

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/books', router);

app.listen(PORT, () => logger(`server stared at http://localhost:${PORT}`));
