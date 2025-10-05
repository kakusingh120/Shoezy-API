# 👟 Shoezy API

The **Shoezy API** is a backend service designed to handle **authentication and user management** for the Shoezy platform.  
It follows a **layered architecture** (Routes → Controller → Service → Repository → Error Middleware) to ensure scalability, maintainability, and clean error handling.

---

## 🔹 Tech Stack
- **Node.js** with **Express.js**
- **Sequelize ORM**
- **PostgreSQL / MySQL**
- **JWT Authentication**
- **Bcrypt for password hashing**

---

## 📌 API Endpoints

| Method | Endpoint               | Description          |
|--------|------------------------|----------------------|
| POST   | `/api/v1/auth/signup`  | Register a new user  |
| POST   | `/api/v1/auth/signin`  | Login existing user  |

---

## 🔐 Authentication APIs

### 1. **Sign Up**
**Endpoint:** `POST /api/v1/auth/signup`

#### Request Body
```json
{
  "username": "krish123",
  "email": "krish@123gmail.com",
  "password": "mypassword123",
  "role": "customer"
}

```

## ✅ Success Response
```json

{
  "success": true,
  "data": {
    "role": "customer",
    "id": 1,
    "username": "krish123",
    "email": "krish@123gmail.com",
    "password": "$2b$10$b6uUpbb9IGA1JgncZlU13.2mwxDBbk6YHxVIDPNUyc7VzjP/UuF5e",
    "updatedAt": "2025-10-04T14:30:10.953Z",
    "createdAt": "2025-10-04T14:30:10.953Z"
  },
  "error": {},
  "message": "User is SignUp successfully."
}

```

## ❌ Error Response
```json
{
  "success": false,
  "error": {
    "name": "SignupError",
    "message": "Email already registered",
    "explanation": "Duplicate email",
    "statusCode": 400
  }
}
```

### 2. **Sign In**
**Endpoint:** `POST /api/v1/auth/signin`


#### Request Body
```json
{
  "email": "krish@123gmail.com",
  "password": "mypassword123"
}


```

## ✅ Success Response
```json

{
  "success": true,
  "data": {
    "id": 1,
    "username": "krish123",
    "email": "krish@123gmail.com",
    "role": "customer",
    "token": "jwt_token_here"
  },
  "error": {},
  "message": "User logged in successfully."
}


```

## ❌ Error Response
```json
{
  "success": false,
  "error": {
    "name": "SigninError",
    "message": "Invalid credentials",
    "explanation": "Email or password is incorrect",
    "statusCode": 401
  }
}

```


## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/shoezy-api.git
cd shoezy-api
