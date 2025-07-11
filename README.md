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
⚫ API Endpoints
All routes are prefixed with:

http://localhost:3000/api/users

◻ 1. Create a New User
Method: POST

Endpoint: /api/users

Request Body- select raw:
{
  "name": "John Doe",
  "email": "johndoe@outlook.com"
}
Response (201 Created):

{
  "message": "User created successfully",
    "user": {
    "id": 3,
    "name": "John Doe",
    "email": "johndoe@outlook.com"
}
}
◻ 2. Get All Users
Method: GET

Response (200 OK):

[
   {
    "id": 1,
    "name": "Champ",
    "email": "champions@gmail.com"
},
  {
    "id": 2,
    "name": "Alice",
    "email": "alice@example.com"
},
{
    "id": 3,
    "name": "John Doe",
    "email": "johndoe@outlook.com"
}
]
🔸 3. Get a Single User by ID
Method: GET

Example: /api/users/1

Response (200 OK):

{
    "id": 1,
    "name": "Champ",
    "email": "champions@gmail.com"
}

🔸 4. Update a User by ID
Method: PUT

Example: /api/users/2

Request Body:

{
  "name": "WhoamI ",
  "email": "whoami@yahoo.com"
}
Response (200 OK):

{
  "message": "User updated successfully"
}
🔸 5. Delete a User by ID
Method: DELETE

Example: /api/users/1

Response (200 OK):

json
Copy code
{
  "message": "User deleted successfully"
}

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
