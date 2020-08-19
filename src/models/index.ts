import {
  IBooksList,
  IBook,
} from '../interfaces/book';

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

// get all elements in book list
export function findAll(): IBooksList {
  return [...bookList];
}

// get element by id (index is used as id)
export function findByID(id: number): IBook {
  return bookList[id];
}

// update element with specific id (index is used as id)
export function updateByID(id: number, bookObj: IBook): IBook {
  bookList[id] = bookObj;
  return bookList[id];
}

// add element to book list
export function createBook(bookObj: IBook): IBook {
  bookList.push(bookObj);
  return bookObj;
}

// delete by id
// export function deleteByID(id: number): IBook {

// }
