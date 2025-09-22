Overview
This project is a web application built for WEB322 Assignment 3, showcasing climate solutions projects with a modern, responsive design. The application builds upon Assignment 2 by adding a custom landing page, about page, 404 error handling, and enhanced styling using Tailwind CSS.
Features

Responsive Landing Page: Hero section with featured project cards
Dynamic Project Filtering: Filter projects by sector
About Page: Personal information and profile
Custom 404 Error Page: User-friendly error handling
Modern UI: Styled with Tailwind CSS and daisyUI components
Dynamic Routing: Express.js server with parameter-based routes

Tech Stack

Backend: Node.js with Express.js
Frontend: HTML, Tailwind CSS, daisyUI
Deployment: Vercel
Development: Visual Studio Code

Prerequisites

Node.js (v14 or higher)
npm or yarn package manager
Git

API Endpoints
Static Routes

GET / - Landing page (home.html)
GET /about - About page (about.html)

Dynamic Routes

GET /solutions/projects - All projects or filtered by sector

Query parameter: ?sector=<sector-name> (optional)
Example: /solutions/projects?sector=industry


GET /solutions/projects/:id - Specific project by ID

Example: /solutions/projects/2



Error Handling

Custom 404 page for unmatched routes
Proper HTTP status codes (200, 404)

Pages Description
Home Page (/)

Navigation Bar: Links to About and sector-based filtering
Hero Section: Welcome message with call-to-action
Featured Projects: Grid of 3 project cards with:

Project image
Title and short summary
Link to detailed view



About Page (/about)

Personal Information: Bio, hobbies, current courses
Profile Image: Personal photo or representative image
Active Navigation: Highlighted "About" link

404 Error Page

User-Friendly Message: Clear 404 error indication
Consistent Navigation: Same navbar as other pages
Visual Design: Engaging error message with daisyUI hero component

Styling & Components
Tailwind CSS Configuration

Framework: Tailwind CSS with daisyUI plugin
Theme: Custom theme (configurable in tailwind.config.js)
Typography: Enhanced with @tailwindcss/typography
Responsive Design: Mobile-first approach

daisyUI Components Used

Hero sections
Navigation bar with dropdown
Card components
Button styling
Grid system
Container layouts

Development Workflow

CSS Development: Run npm run tw:build to watch for changes
Server Development: Use npm start to run the Express server
Testing: Test all routes and functionality locally
Deployment: Deploy to Vercel when ready

Deployment
This application is designed to be deployed on Vercel. Follow the Vercel deployment guide provided in the course materials.
Deployment Checklist

 All dependencies installed
 CSS built successfully
 All routes tested locally
 Environment variables configured (if any)
 Vercel configuration completed
