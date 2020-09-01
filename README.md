## CRUD Rest API build with Typescript, Express, Mongoose and Mongodb.

This repo contains the code base for a simple REST API that implements crud methods for a Book object

### Book data model

```
{
    "title": string and required,
    "author": string and required,
    "country": string and optional,
    "language"?: string and optional,
    "publicationDate": {
        "year": number and required,
        "month": number and optional
    }
}
```

### API endpoint

The API has one endpoint with five possible HTTP methods

```
GET books/
GET books/bookid
POST books/
PUT books/bookid
DELETE books/bookid
```

## ```Hot to run```

First, clone this repo and run ```npm install```

Second, create a ```.env``` file on the project's root and add the following line:
```DATABASE_URL=mongodb:<your mongodb url>```
to connect to your database.

### ```Run in development mode```

Run the following script ```npm run dev```

### ```Run build version```

Run the following scripts ```npm run build``` and ```npm start```

