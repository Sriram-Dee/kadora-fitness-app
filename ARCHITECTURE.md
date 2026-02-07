# System Architecture

## Overview

Kadora Fitness App is a client-side React application designed for high performance and dynamic content management. It utilizes a `ContentContext` to simulate a database, allowing for instant updates to the application state without a backend for this foundational phase.

## Directory Structure

```
src/
├── assets/            # Static assets (images, fonts)
├── components/
│   ├── layout/        # Layout components (Navbar, Footer, AdminLayout, ProtectedRoute)
│   ├── ui/            # Reusable UI components from Shadcn/UI
│   └── admin/         # Admin-specific components (Sidebar)
├── context/           # Global state management
│   └── ContentContext.jsx # The "Brain" of the app
├── pages/
│   ├── public/        # Public-facing routes (Home, Pricing, About, Contact)
│   └── admin/         # Admin dashboard routes
├── styles/            # Global styles and Tailwind imports
└── lib/               # Utility functions (cn helper)
```

## Key Components

### 1. customizable Content Context

The `ContentContext` uses `useReducer` to manage the state of the application. It holds data for:

- **Site Content**: Text and images for various sections.
- **Plans**: Pricing plan details.
- **Theme Settings**: Global CSS variables for theming.

### 2. Protected Routes

The `ProtectedRoute` component ensures that only authenticated users (checked via `localStorage`) can access the `/admin` routes. Unauthenticated users are redirected to the login page.

### 3. Admin Layout

The `AdminLayout` provides a persistent sidebar and header for all admin pages. It handles responsive behavior, ensuring the sidebar is accessible on mobile devices via a toggle overlay.

### 4. Dynamic Theming

The application uses CSS variables (e.g., `--primary-color`) defined in `index.css` and updated via JavaScript in the `ContentContext`. This allows the theme to be changed at runtime without reloading the page.

## Deployment

The application is deployed to GitHub Pages using the `gh-pages` package. The build process uses Vite to generate optimized static assets in the `dist` directory.
