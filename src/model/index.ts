import {
  IBooksList,
  IBook
} from '../interfaces';

const bookList: IBook[] = [
  {
    title: 'The catcher in the Rye',
    author: 'J. D. Salinger',
    country: 'US',
    language: 'EN-US',
    publicationDate: {
      year: 1951,
    },
  },
  {
    title: 'Capitães da Areia',
    author: 'Jorge Amado',
    country: 'BR',
    language: 'PT-BR',
    publicationDate: {
      year: 1930,
    },
  },
];

export function findAll(): IBooksList {
  return [...bookList];
}

export function findByID(id: number): IBook {
  return bookList[id];
}

export function updateByID(id: number, bookObj: IBook): IBook {
  bookList[id] = bookObj;
  return bookList[id];
}

export function createBook(bookObj: IBook): IBook {
  bookList.push(bookObj);
  return bookObj;
}
