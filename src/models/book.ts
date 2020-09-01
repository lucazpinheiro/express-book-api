import {
  model,
  Schema,
  Document,
} from 'mongoose';
import { IBook } from '../interfaces/book';

export interface IBookModel extends IBook, Document {}

const BooksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  language: {
    type: String,
  },
  publicationDate: {
    year: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
    },
  },
});

const BookModel = model<IBookModel>('Books', BooksSchema);

export default BookModel;
