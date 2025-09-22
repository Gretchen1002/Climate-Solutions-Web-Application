# - Climate Solutions Web Application
A modern, responsive web application showcasing climate solutions projects built with Express.js, Tailwind CSS, and daisyUI.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [Pages](#pages)
- [Styling](#styling)
- [Scripts](#scripts)
- [Development](#development)
- [Deployment](#deployment)

## Overview

- **Custom landing page** with links to various projects
- **About page** with personal information
- **Custom 404 error page** for better user experience
- **Dynamic routing** with query parameters and URL parameters
- **Enhanced styling** using Tailwind CSS and daisyUI components
- **Static file serving** for CSS and other assets

## Features

- ✅ Responsive landing page with hero section and project cards
- ✅ Dynamic project filtering by sector using query parameters
- ✅ Individual project pages with dynamic routing
- ✅ Personal about page with profile information
- ✅ Custom 404 error handling
- ✅ Modern UI with Tailwind CSS and daisyUI
- ✅ Mobile-responsive design
- ✅ Navigation bar with dropdown functionality

## Tech Stack

| Category | Technology |
|----------|------------|
| **Backend** | Node.js, Express.js |
| **Frontend** | HTML5, Tailwind CSS, daisyUI |
| **Styling** | Tailwind CSS, @tailwindcss/typography |
| **Deployment** | Vercel |
| **Development** | Visual Studio Code |


## API Endpoints

### Static Routes

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Home page (landing) |
| `GET` | `/about` | About page |

### Dynamic Routes

| Method | Route | Description | Example |
|--------|-------|-------------|---------|
| `GET` | `/solutions/projects` | All projects or filtered by sector | `/solutions/projects?sector=industry` |
| `GET` | `/solutions/projects/:id` | Specific project by ID | `/solutions/projects/2` |

### Error Handling

- Custom 404 page for unmatched routes
- Proper HTTP status codes (200, 404)
- Error messages for failed operations

## Pages

### Home Page (`/`)

**Navigation:**
- "Climate Solutions" brand link (links to `/`)
- "About" link (links to `/about`)
- "Sector" dropdown with links to filtered project views

**Content:**
- Hero section with call-to-action button
- Grid of 3 featured project cards containing:
  - Project image (`feature_img_url`)
  - Project title
  - Short summary (`summary_short`)
  - Link to detailed view (`/solutions/projects/:id`)

### About Page (`/about`)

**Navigation:**
- Same as home page with "About" link highlighted (`active` class)

**Content:**
- Hero section with "About" header
- Two-column layout:
  - Left: Personal image
  - Right: Personal information (bio, hobbies, courses)

### 404 Error Page

**Navigation:**
- Same navbar as other pages

**Content:**
- Hero section with 404 error message
- User-friendly error display

## Styling

### Tailwind CSS Setup

1. **Install dependencies:**
   ```bash
   npm install --save-dev tailwindcss
   npm install @tailwindcss/typography daisyui
   ```

2. **Configure `tailwind.config.js`:**
   ```javascript
   module.exports = {
     content: ["./views/**/*.html"],
     plugins: [
       require("@tailwindcss/typography"),
       require("daisyui")
     ],
     daisyui: {
       themes: ["dim"] // or your preferred theme
     }
   }
   ```

3. **Create `public/css/tailwind.css`:**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### daisyUI Components Used

- **Hero** - For main content sections
- **Navbar** - With dropdown functionality
- **Card** - For project displays
- **Button** - For call-to-action elements
- **Container** - For content layout

## Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "tw:build": "npx tailwindcss -i ./public/css/tailwind.css -o ./public/css/main.css --watch"
  }
}
```

**Usage:**
- `npm start` - Start the Express server
- `npm run tw:build` - Build and watch Tailwind CSS

## Development

### Development Workflow

1. **Start CSS build process:**
   ```bash
   npm run tw:build
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Test locally:**
   - Visit `http://localhost:8080`
   - Test all routes and functionality
   - Check responsive design

### Server Configuration

The `server.js` file includes:

- Static file serving: `app.use(express.static('public'));`
- Route handlers for all pages
- Error handling with proper status codes
- Dynamic routing with parameters

## Deployment

### Vercel Deployment

1. **Prepare for deployment:**
   - Ensure all dependencies are in `package.json`
   - Build CSS with `npm run tw:build`
   - Test locally

2. **Deploy to Vercel:**
   - Follow the Vercel Guide provided in course materials
   - Configure build settings if necessary

### Deployment Checklist

- [ ] All dependencies installed
- [ ] CSS compiled successfully
- [ ] All routes tested locally
- [ ] Environment variables set (if any)
- [ ] Vercel deployment configured

