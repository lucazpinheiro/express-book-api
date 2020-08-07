interface BookPublicationDate {
  year: number,
  month?: number,
}

interface BookInterface {
  title: string,
  author: string,
  country?: string,
  language?: string,
  publicationDate: BookPublicationDate,
}

interface BooksList {
  [index: number]: BookInterface,
}

const bookList: BooksList = [{
  title: 'The catcher in the Rye',
  author: 'J. D. Salinger',
  country: 'US',
  language: 'EN-US',
  publicationDate: {
    year: 1951,
  },
}];

export async function find() {
  return bookList;
}

export async function createBook(bookObj: object) {
  console.log(bookObj);
}
