# Express PostgreSQL CRUD API

A simple RESTful API built with Express.js and PostgreSQL that supports basic CRUD operations for a `users` table.

---

## Features

- Connects to a PostgreSQL database
- CRUD operations on `users` table:
  - Create a new user - POST
  - Read all users - GET
  - Read a user by ID- GET/:ID
  - Update a user by ID - PUT/:ID
  - Delete a user by ID -DEL/:ID
- Proper error handling
- Environment variables support via `.env`

---

## Required
- PostgreSQL database

---

## Setup

**Clone the** 
    https://github.com/Oluloba/postgreSQL
 cd express-postgres-api

 Install dependencies
    npm install

Run this SQL to create the users tablle:
            CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
        );
### Testing
Use Postman to test the endpoints. Add postman collection after exporting ffrom the postman folder.
