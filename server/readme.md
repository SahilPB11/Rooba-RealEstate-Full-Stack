# Node.js Express Application with User Authentication and Statistics 🌟

---

## Introduction 💡

This project is a simple Node.js Express application that demonstrates user authentication and statistics. It includes features like user sign-up, login, logout, and the ability to fetch user statistics. 📊

## Features 💥

- User Authentication (Sign-up and Login) 🔐
- User Statistics (Total users, Average age, Distribution of users by country) 🌍
- Error Handling Middleware 🛡️

## Setup 🛠️

To set up the project, you'll need the following:

- Node.js and npm installed ✅
- MongoDB database 💾

### 1. Clone the project repository:

```
git clone https://github.com/username/node-express-auth-stats.git
```

### 2. Install the project dependencies:

```
cd node-express-auth-statsnpm install
```

### 3. Create a `.env` file in the project root directory and add the following environment variables:

```
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/node-express-auth-stats
JWT_SECRET=mysecretkey
```

- Replace `MONGODB_URI` with your MongoDB connection string.
- Replace `JWT_SECRET` with a secure secret key for JSON Web Tokens (JWT).

### 4. Start the MongoDB database.

### 5. Run the application:

```
npm start
```

## Usage 🚀

### User Authentication 👤

- **Sign-up:**

  - Make a POST request to `/user/signup` with the following JSON body:

    ```
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "age": 25,
      "country": "United States",
      "password": "secret123"
    }
    ```

- **Login:**

  - Make a POST request to `/user/login` with the following JSON body:

    ```
    {
      "email": "johndoe@example.com",
      "password": "secret123"
    }
    ```

### User Statistics 📊

- **Get User Statistics:**

  - Make a GET request to `/stats` to retrieve user statistics.

## Endpoints 🔗

- `/user/signup` - Signs up a new user.
- `/user/login` - Logs in a user.
- `/user/logout` - Logs out a user.
- `/stats` - Retrieves user statistics.

## Contributing 🤝

Contributions are welcome! Please read the contribution guidelines before submitting a pull request.

## License 📜

This project is licensed under the MIT License.

## Libraries Used 🌟

- **Express.js:** A powerful Node.js web framework for building web applications and APIs.
- **MongoDB:** A popular NoSQL database for storing data in a document-oriented format.
- **jsonwebtoken:** A library for creating and verifying JSON Web Tokens (JWT) for secure authentication and authorization.
- **body-parser:** A middleware for parsing incoming request bodies in a web application.
- **cookie-parser:** A middleware for parsing and signing cookies in a web application.
- **cors:** A middleware for enabling Cross-Origin Resource Sharing (CORS) in a web application.
- **dotenv:** A library for loading environment variables from a `.env` file.

These libraries were chosen for their popularity, stability, and ease of use. They allow you to build robust and scalable web applications with ease.
