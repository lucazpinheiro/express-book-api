## A simple REST API build with Typescript, Express, Mongoose, and Mongodb.

The API implements CRUD routes for a `book` object. Wich can be accessed through the `/books` endpoint.

### Book data model

```
{
    "title": string and required,
    "author": string and required,
    "country": string and optional,
    "language": string and optional,
    "publicationDate": {
        "year": number and required,
        "month": number and optional
    }
}
```

### API endpoint

```
GET /books
GET /books/bookid
POST /books
PUT /books/bookid
DELETE /books/bookid
```
*Use the mongodb `_id` as the `/bookid` parameter*

## ```Hot to run```

### ```Initial setup```

0. Clone this repo and run ```npm install```

0. If you have mongodb installed locally just you don't need to do anything else. But, if want to use a remote database, create a ```.env``` file on the project's root and add the following line: ```DATABASE_URL=mongodb:<your mongodb url>``` to connect to your database.

### ```Running in development with hot reaload```

Run ```npm run dev```

### ```Generate a build```

Run ```npm run build```

### ```Build and run```

Run ```npm start```
