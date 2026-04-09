# MultiClout Backend

A complete Node.js Express backend for MultiClout authentication system.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Start Production Server
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

## Features

- ✅ JWT Authentication
- ✅ Password Hashing
- ✅ Input Validation
- ✅ Rate Limiting
- ✅ CORS Enabled
- ✅ MongoDB Integration
- ✅ Error Handling

## Environment Variables

Copy `.env-new` to `.env` and update with your actual values:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
```
