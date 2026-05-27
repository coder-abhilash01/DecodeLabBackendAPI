# DecodeLab Backend API

A simple backend API built using Node.js and Express.js for handling interior design inquiries.

---

## Features

- Create Inquiry API
- Get All Inquiries API
- Basic Validation
- JSON Responses
- Express Backend

---

## Tech Stack

- Node.js
- Express.js
- Cors
- Dotenv

---

## Folder Structure

```bash
src/
├── controllers/
├── routes/
server.js
```

---

## API Endpoints

### Create Inquiry

```http
POST /api/inquiries
```

### Request Body

```json
{
  "name": "Abhilash",
  "email": "test@gmail.com",
  "message": "Need interior design service"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Inquiry created successfully"
}
```

---

## Get All Inquiries

```http
GET /api/inquiries
```

### Success Response

```json
{
  "success": true,
  "message": "Inquiries retrieved successfully",
  "data": []
}
```

---

## Installation

```bash
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000
```

---

## Author
Abhilash Tiwari