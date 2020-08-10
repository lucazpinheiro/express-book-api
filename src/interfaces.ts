export interface IBookPublicationDate {
  year: number,
  month?: number,
}

export interface IBook {
  title: string,
  author: string,
  country?: string,
  language?: string,
  publicationDate: IBookPublicationDate,
}

export interface IBooksList {
  [index: number]: IBook,
}