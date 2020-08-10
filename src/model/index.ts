interface IBookPublicationDate {
  year: number,
  month?: number,
}

interface IBookInterface {
  title: string,
  author: string,
  country?: string,
  language?: string,
  publicationDate: IBookPublicationDate,
}

interface IBooksList {
  [index: number]: IBookInterface,
}

const bookList: IBookInterface[] = [
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
  return bookList;
}

export function findByID(id: number): IBookInterface {
  return bookList[id];
}

export function createBook(bookObj: IBookInterface): IBookInterface {
  bookList.push(bookObj);
  return bookObj;
}
