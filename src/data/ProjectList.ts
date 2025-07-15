import { ProjectCardProps } from "../components/Projectcard";

export const ProjectList : ProjectCardProps[] = [
    {
        name: 'Currency Converter',
        details: 'A cross-platform mobile application that provides real-time currency conversion with an intuitive user interface. Features live exchange rates, offline support, and conversion history.',
        link: 'https://github.com/Trinankur002/Currency-Converter',
        demoLink: '', // Add if you have a live demo
        techs: ['React Native', 'JavaScript', 'REST API', 'AsyncStorage', 'Expo'],
        category: 'mobile',
        status: 'completed',
        highlights: [
            'Real-time exchange rate fetching from multiple APIs',
            'Offline currency conversion with cached rates',
            'Clean, intuitive UI with smooth animations',
            'Conversion history and favorite currencies'
        ]
    },
    {
        name: 'E-Commerce Backend API',
        details: 'A robust RESTful API backend for e-commerce platforms built with Node.js and Express. Handles user authentication, product management, shopping cart, and order processing with MongoDB.',
        link: 'https://github.com/Trinankur002/E-Commerce-Backend',
        demoLink: '', // Add API documentation link if available
        techs: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt', 'Mongoose'],
        category: 'backend',
        status: 'completed',
        highlights: [
            'Secure JWT-based authentication system',
            'Complete CRUD operations for products and users',
            'Shopping cart and order management',
            'Input validation and error handling'
        ]
    },
    {
        name: 'Password Generator',
        details: 'A secure password generation mobile app with customizable options for creating strong passwords. Features multiple character sets, length options, and password strength indicators.',
        link: 'https://github.com/Trinankur002/Simple-Password-Generator',
        demoLink: '',
        techs: ['React Native', 'JavaScript', 'Crypto', 'AsyncStorage'],
        category: 'mobile',
        status: 'completed',
        highlights: [
            'Customizable password length and character sets',
            'Password strength indicator and security tips',
            'Copy to clipboard functionality',
            'Password history with secure storage'
        ]
    },
    {
        name: 'Easy Notes',
        details: 'A clean and simple note-taking Android application with local storage. Features include note creation, editing, deletion, and search functionality with a material design interface.',
        link: 'https://github.com/Trinankur002/Easy_Notes',
        demoLink: '',
        techs: ['Android', 'Java', 'SQLite', 'Material Design', 'RecyclerView'],
        category: 'mobile',
        status: 'completed',
        highlights: [
            'Local SQLite database for offline access',
            'Search and filter notes functionality',
            'Material Design UI components',
            'Note categorization and tagging'
        ]
    },
    {
        name: 'Take Care - Meditation App',
        details: 'A mindfulness and meditation Android app built with Kotlin and Jetpack Compose. Offers guided meditations, breathing exercises, progress tracking, and calming soundscapes.',
        link: 'https://github.com/Trinankur002/Take-Care',
        demoLink: '',
        techs: ['Kotlin', 'Jetpack Compose', 'Android', 'Room Database', 'MediaPlayer'],
        category: 'mobile',
        status: 'completed',
        highlights: [
            'Guided meditation sessions with audio',
            'Breathing exercise timer with animations',
            'Progress tracking and streak counters',
            'Calming background sounds and music'
        ]
    },
    {
        name: 'Portfolio Website',
        details: 'A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark theme, contact form, and showcases projects and skills professionally.',
        link: 'https://github.com/Trinankur002/Portfolio',
        demoLink: window.location.origin, // Current portfolio
        techs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'CSS Animations'],
        category: 'frontend',
        status: 'completed',
        highlights: [
            'Responsive design with modern UI/UX',
            'Interactive skills section with filtering',
            'Smooth animations and transitions',
            'Contact form with email integration'
        ]
    },
    {
        name: 'Task Management API',
        details: 'A comprehensive task management REST API with user authentication, project organization, and team collaboration features. Built with Node.js and MongoDB for scalable performance.',
        link: 'https://github.com/Trinankur002/Task-Management-API',
        demoLink: '',
        techs: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt', 'Joi', 'Swagger'],
        category: 'backend',
        status: 'completed',
        highlights: [
            'Multi-user authentication and authorization',
            'Project-based task organization',
            'Real-time collaboration features',
            'Comprehensive API documentation with Swagger'
        ]
    },
    {
        name: 'Weather Forecast App',
        details: 'A React Native weather application providing detailed forecasts, location-based weather data, and interactive weather maps. Features offline caching and push notifications.',
        link: 'https://github.com/Trinankur002/Weather-App',
        demoLink: '',
        techs: ['React Native', 'TypeScript', 'Weather API', 'AsyncStorage', 'Push Notifications'],
        category: 'mobile',
        status: 'in-progress',
        highlights: [
            'Location-based weather detection',
            '7-day detailed weather forecast',
            'Interactive weather maps and radar',
            'Offline data caching and sync'
        ]
    },
]