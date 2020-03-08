/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const booksRouter = require('./routes/books.js');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('connected to databse'));

const app = express();

app.use(express.json());

app.use('/books', booksRouter);

app.listen(5000, () => console.log('server started'));
