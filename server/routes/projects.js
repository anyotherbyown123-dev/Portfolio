const express = require('express');
const router = express.Router();

// In-memory projects store
let projects = [
  {
    title: "BLOG Management System",
    languages: "Html, Css, JavaScript, PHP, MySQL as Database",
    description: "The Blog Management Website is a dynamic web application designed to allow users to create, read, update, and delete blog posts efficiently.",
    role: "Designed, Developed and Tested.",
    category: "PROJECT (BTECH SEM - 3)"
  },
  {
    title: "Event Management System",
    languages: "Html, BootStrap, JavaScript, PHP, MySQL as Database",
    description: "Engineered a scalable event management platform enabling event creation, participant registration, and schedule tracking. Implemented efficient backend logic and database management, improving data handling and user experience.",
    role: "Designed, Developed and Tested.",
    category: "PROJECT (BTECH SEM - 3)"
  },
  {
    title: "TripNexus",
    languages: "Html, Css, Javascript, PHP as Backend, MySQL as Database",
    description: "Developed a full-stack travel booking platform enabling users to search, compare, and book flights, hotels, and travel packages. Implemented complete CRUD functionality for managing bookings, user profiles, and listings. Integrated dynamic UI with responsive design, ensuring seamless user experience across devices. Utilized database management for real-time data handling and optimized performance for fast search and booking operations.",
    role: "Designed, Developed and Tested.",
    category: "PROJECT (BTECH SEM - 4)"
  }
];

// Get all projects
router.get('/', (req, res) => {
  res.json(projects);
});

// Seed projects (just for compatibility)
router.post('/seed', (req, res) => {
  res.json(projects);
});

module.exports = router;
