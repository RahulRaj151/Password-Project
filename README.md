# Secure Password Manager using MERN Stack

A full-stack Password Manager web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application allows users to securely register, log in, store passwords, and manage credentials through a modern dashboard interface.

---

# Project Information

* **Name:** Rahul Raj
* **Registration Number:** 2341018060
* **Section:** 23413C1
* **Serial Number:** 44

---

# Features

* User Registration and Login
* JWT Authentication
* Secure Password Hashing using bcrypt
* Add and Manage Passwords
* View Stored Passwords
* Show/Hide Password Feature
* Copy Password to Clipboard
* Search Passwords
* Responsive Dashboard UI
* MongoDB Database Integration
* Student Registration Form Validation
* MongoDB Aggregation Operations

---

# Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Security

* bcryptjs
* JSON Web Token (JWT)
* dotenv

---

# Project Structure

```bash
project-root/
│
├── client/
│
├── server/
│
├── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-link>
```

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# API Routes

## Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

## Password Manager

* POST `/api/passwords/add`
* GET `/api/passwords`
* DELETE `/api/passwords/:id`

## Student Registration

* POST `/api/students/register`
* GET `/api/students/aggregation`

---

# MongoDB Aggregation Operations

* Group students based on marks range
* Count students in each category
* Sort students by marks
* Display selected fields using projection

---

# Security Features

* Password hashing using bcrypt
* JWT authentication
* Protected routes
* Environment variable protection

---

# UI Features

* Dark Theme Dashboard
* Responsive Design
* Glassmorphism Cards
* Sidebar Navigation
* Interactive UI Components

---

# Output

The final application provides:

* Secure user authentication
* Password management system
* Student registration validation
* MongoDB data aggregation dashboard
* Modern responsive interface

---

# Developed For

Minor Project
Full-Stack Web Development with MERN
ITER, Siksha 'O' Anusandhan University
