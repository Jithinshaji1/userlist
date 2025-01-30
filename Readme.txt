Backend Assignment - User Management API

Overview
This backend API provides basic CRUD operations for managing user data, along with JWT-based authentication to protect certain routes. The application is built with Node.js and PostgreSQL. The database stores user details such as username, email, and password. It also includes a sample protected route to demonstrate secure authentication.

Features
- User CRUD: Create, Read, Update, Delete operations for users.
- JWT Authentication: Secure routes using JWT tokens.
- Error Handling: Proper error handling for invalid requests and server errors.

## Prerequisites

1. Node.js
2. PostgreSQL 
3. Postman ( for testing the API)

## Endpoints

### User Routes
- **POST `/user/users`**: Create a new user.
  - Request body:
    ```json
    {
      "username": "exampleUser",
      "password": "examplePassword",
      "email": "user@example.com"
    }
    ```
  
- **GET `/user/users/:id`**: Retrieve user details by ID.
  
- **PUT `/user/users/:id`**: Update user details.
  - Request body:
    ```json
    {
      "username": "updatedUsername",
      "email": "updatedEmail@example.com"
    }
    ```

- **DELETE `/user/users/:id`**: Delete user by ID.

### Authentication Routes
- **POST `/user/login`**: Login and receive JWT token.
  - Request body:
    ```json
    {
      "username": "exampleUser",
      "password": "examplePassword"
    }
    ```
  - Response:
    ```json
    {
      "token": "your_jwt_token"
    }
    ```

### Protected Routes
- **GET `/user/protected`**: A sample protected route requiring a valid JWT token in the `Authorization` header (`Bearer token`).

## Authentication Flow

- When a user logs in, the API returns a JWT token.
- This token must be included in the `Authorization` header as `Bearer <your_jwt_token>` for any protected routes.

### Example:
To access the protected route, the request would look like this:
```bash
GET /user/protected
Authorization: Bearer <your_jwt_token>
```

### Error Handling
The API provides detailed error messages for various issues:
- 400 Bad Request: For invalid input (e.g., missing fields).
- 401 Unauthorized: For invalid or missing JWT token.
- 404 Not Found: If a resource (e.g., user) is not found.
- 500 Internal Server Error: Server issues.

## Technologies Used

- Node.js JavaScript runtime to build the server.
- Express.js: Web framework for handling HTTP requests.
- PostgreSQL: Relational database to store user information.
- pg: PostgreSQL client for Node.js to interact with the database.
- JWT (JSON Web Token): Secure authentication for protected routes.

## Troubleshooting

- ECONNREFUSED error: If you encounter this, it usually means the app can’t connect to the PostgreSQL server. Double-check if PostgreSQL is running and if your `.env` file contains the correct connection details.

- JWT issues: If you're unable to access protected routes, make sure that the token is included in the `Authorization` header as `Bearer <your_jwt_token>`.

