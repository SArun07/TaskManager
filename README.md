# TaskManager

**TaskManager** is a full-featured web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to manage their notes efficiently. The application supports full authentication, CRUD operations for notes, and is fully responsive, with future plans for AI-driven and UI enhancements.

## Features

- **User Authentication**: Secure login and registration.
- **CRUD Operations**: Create, read, update, and delete notes.
- **Responsive Design**: Optimized for various devices and screen sizes.
- **Future Enhancements**: Planned integration with AI-driven UI improvements.

## Technologies

### Backend

- **Node.js**: JavaScript runtime for server-side execution.
- **Express.js**: Framework for building RESTful APIs.
- **Mongoose**: ODM for MongoDB, managing schemas and data.
- **jsonwebtoken**: For user authentication and token management.

### Frontend

- **React.js**: Library for building user interfaces.
- **Context API**: For managing global state in React.

## Project Structure

### Backend (`backend/`)

- **middleware/**: Contains middleware functions for authentication and other processing.
- **models/**: Mongoose schemas for user and note data.
- **routes/**: API endpoints for user authentication and note operations.
- **.gitignore**: Excludes files and directories from version control.
- **db.js**: Database connection configuration.
- **index.js**: Main entry point for the backend server.
- **package.json**: Lists dependencies and scripts for the backend.
- **package-lock.json**: Locks versions of backend dependencies.

### Frontend (`taskmanager/`)

- **public/**: Static assets and root HTML file.
- **src/**:
  - **components/**: Reusable React components including About, AddNote, Alert, Home, Login, Navbar, Notes, Signup, and NoteItem.
  - **context/**: Context providers for managing global state.
- **.gitignore**: Excludes files and directories from version control.
- **package.json**: Lists dependencies and scripts for the frontend.
- **package-lock.json**: Locks versions of frontend dependencies.
- **README.md**: Project documentation.

## Installation

### Clone the Repository

```bash
git clone <repository-url>

cd path/to/your/Backend - npm install
cd path/to/your/taskmanager - npm install

#Go to db.js and setup your Mongodb path
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

# run below code in cd path/to/your/taskmanager
npm run both 

or

cd path/to/your/Backend - npm run dev
cd path/to/your/taskmanager - npm run start

bash```






