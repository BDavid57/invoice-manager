# Invoice Manager

A full-stack application for managing invoices. This repository contains the **backend server** built with [NestJS](https://nestjs.com/) and [Prisma](https://www.prisma.io/), using PostgreSQL as the database and Docker for containerization.

## 🚀 Features

- 🧱 Modular NestJS project structure
- 🔐 JWT Authentication using Passport.js
- 🧾 Invoice API (GET all, GET by ID)
- 🛡️ Protected routes via `JwtAuthGuard`
- ✅ Zod-based validation for login
- 🐳 Fully Dockerized setup
- ⚡ Prisma ORM with automated migrations and seeding

---

## 📦 Tech Stack

- **NestJS** – Scalable Node.js framework
- **Prisma** – Type-safe database ORM
- **PostgreSQL** – Relational database
- **Docker** – Containerized development
- **Zod** – Schema validation
- **JWT** – Stateless authentication

---

## 🔧 Getting Started

### 🧪 Environment Variables

Create a `.env` file in the `server/` directory with the following content:

```env
DATABASE_URL="postgresql://dev:devpass@db:5432/invoicedb"
JWT_SECRET="your-secret"
JWT_EXPIRES="1h"
```

### Build & run with Docker

```bash
$ docker compose build
$ docker compose up -d
```

This will:
1. start PostgreSQL,
2. run Prisma migrations & seeding,
3. launch the NestJS API on http://localhost:3000.


### 🔐 Authentication

Login:
POST /auth/login
Content-Type: application/json

### Req Body:
```json 
{ 
  "email": "admin@company.com", 
  "password": "securepassword" 
} 
```

### Response:
```json 
{ "access_token": "JWT_TOKEN" }
```

### Use this in requests:
Authorization: Bearer <token>

### 📄 Invoice Endpoints
- GET /invoices
- GET /invoices/:id
🔒 Requires JWT token.
