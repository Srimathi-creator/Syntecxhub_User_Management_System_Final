# User Management System

## Description

The User Management System is a RESTful API application developed using Node.js, Express.js, MongoDB, and Mongoose. It allows users to perform CRUD (Create, Read, Update, Delete) operations on user records. The API endpoints are secured using Basic Authentication and tested using Postman. A simple frontend interface is also included for managing users.

## Features

* Create a new user
* View all users
* View a user by ID
* Update user details
* Delete a user
* MongoDB database integration
* Mongoose schema definition
* Basic Authentication for API security
* Postman API testing
* Simple frontend interface

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* HTML
* CSS
* JavaScript
* Bootstrap
* Postman

## Project Structure

```
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── server.js

frontend/
├── css/
├── js/
├── index.html
├── dashboard.html
```

## Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Configure MongoDB connection in `.env`

4. Start the server

```bash
npm start
```

or

```bash
npm run dev
```

## API Authentication

Protected API endpoints use Basic Authentication.

**Username:** admin

**Password:** 1234

## API Endpoints

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| POST   | /api/users     | Create User    |
| GET    | /api/users     | Get All Users  |
| GET    | /api/users/:id | Get User By ID |
| PUT    | /api/users/:id | Update User    |
| DELETE | /api/users/:id | Delete User    |

## Testing

All API endpoints were successfully tested using Postman with Basic Authentication enabled.

## Author

Srimathi
