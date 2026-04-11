# Frontend - React + Vite

This is the React frontend for the MERN migration project.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Features

- **React 19** with modern hooks
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Axios** for API calls
- **JWT Authentication** with context management
- **Responsive Design** with mobile-first approach

## Project Structure

```
frontend/
├── public/         # Static assets
├── src/
│   ├── components/ # Reusable components
│   ├── pages/      # Page components
│   ├── hooks/      # Custom hooks
│   ├── utils/      # Utility functions
│   ├── App.jsx     # Main app component
│   ├── main.jsx    # Entry point
│   └── index.css   # Global styles
├── package.json    # Dependencies and scripts
├── vite.config.js  # Vite configuration
└── tailwind.config.js # Tailwind configuration
```

## Available Pages

- **Home** - Landing page
- **Login** - User authentication
- **Register** - User registration
- **Dashboard** - User dashboard
- **Products** - Product listing
- **Cart** - Shopping cart
- **Wishlist** - Saved items

## Authentication

The app uses JWT tokens for authentication. Tokens are stored in localStorage and automatically included in API requests.

## API Integration

The frontend is configured to proxy API requests to the backend server running on `http://localhost:5000`.

## Development

The development server runs on `http://localhost:5173` by default and includes hot module replacement for fast development.

## Technologies Used

- **React 19** - UI library
- **Vite 8** - Build tool and dev server
- **React Router 6** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
