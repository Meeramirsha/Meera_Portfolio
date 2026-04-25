import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  color: string;
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
  highlights: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'AI-Powered Car Buy & Sell Platform',
      description: 'Developed a full-stack platform for buying and selling cars, integrated with a Python-based AI service for price prediction using machine learning, built on Spring Boot and AngularJS.',
      tags: ['Spring Boot', 'AngularJS', 'Python AI', 'MySQL'],
      icon: 'fas fa-robot',
      color: '#f59e0b',
      githubUrl: 'https://github.com/Meeramirsha/Car_Buy_Sell',
      demoUrl: '#',
      imageUrl: '/car_app.png?v=1',
      highlights: [
        'Integrated Python ML model for car price prediction',
        'Designed full-stack architecture with Spring Boot & AngularJS',
        'Implemented comprehensive CRUD APIs for car listings',
        'Built responsive UI components for seamless user experience'
      ]
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Designed and developed a modern, fully responsive personal portfolio to showcase my projects, skills, and experience with interactive UI elements.',
      tags: ['Angular', 'SCSS', 'TypeScript', 'Responsive Design'],
      icon: 'fas fa-laptop-code',
      color: '#ec4899',
      githubUrl: 'https://github.com/Meeramirsha/Portfolio_Meera',
      demoUrl: '#',
      imageUrl: '/portfolio_app.png?v=1',
      highlights: [
        'Built with modern Angular standalone components',
        'Created custom glassmorphism UI design and scroll animations',
        'Implemented interactive elements like Light/Dark theme toggle',
        'Mobile-first and fully responsive design architecture'
      ]
    },
    {
      title: 'Flood Prediction System',
      description: 'Developed an AI-based system to predict flood risks using historical rainfall and water level data, featuring a Python backend and machine learning models.',
      tags: ['Python', 'Machine Learning', 'Flask', 'Data Analysis'],
      icon: 'fas fa-cloud-showers-heavy',
      color: '#3b82f6',
      githubUrl: 'https://github.com/Meeramirsha/flood-prediction-system',
      demoUrl: 'https://flood-prediction-system-74kr.onrender.com/',
      imageUrl: '/flood_app.png?v=2',
      highlights: [
        'Developed AI-based risk prediction system',
        'Utilized historical rainfall and water level data',
        'Features Python backend with ML models',
        'Implemented using Flask and Scikit-learn'
      ]
    },
    {
      title: 'Quiz Web Application',
      description: 'Created an AngularJS quiz portal with 5+ reusable UI components, enabling quiz creation, result tracking, and user history management.',
      tags: ['AngularJS', 'JavaScript', 'Routing', 'UI Components'],
      icon: 'fas fa-question-circle',
      color: '#06b6d4',
      githubUrl: 'https://github.com/Meeramirsha/quiz-app',
      demoUrl: 'https://quiz-app-eodp.vercel.app',
      imageUrl: '/quiz_app.png?v=1',
      highlights: [
        'Created with 5+ reusable UI components',
        'Enables quiz creation and result tracking',
        'User history management',
        'Component-based design with responsive layout'
      ]
    },
    {
      title: 'Ecommerce Backend',
      description: 'Built a Spring Boot + MySQL backend system implementing 10+ REST APIs with DTO validation and layered architecture to manage products, users, and orders efficiently.',
      tags: ['Spring Boot', 'MySQL', 'REST APIs', 'DTOs'],
      icon: 'fas fa-shopping-cart',
      color: '#10b981',
      githubUrl: 'https://github.com/Meeramirsha/techEcommerce-backend',
      demoUrl: '#',
      imageUrl: '/ecommerce_app.png?v=1',
      highlights: [
        'Built 10+ REST APIs with DTO validation',
        'Layered architecture for efficient management',
        'Managed products, users, and orders',
        'Spring Boot & MySQL implementation'
      ]
    },
    {
      title: 'Customer Service Management System',
      description: 'Engineered a RESTful backend using Spring Boot and MySQL, implementing CRUD APIs to manage 100+ simulated customer queries and feedback records.',
      tags: ['Spring Boot', 'MySQL', 'REST APIs', 'CRUD'],
      icon: 'fas fa-users',
      color: '#8b5cf6',
      githubUrl: 'https://github.com/Meeramirsha/CustomerService',
      demoUrl: '#',
      imageUrl: '/customer_app.png?v=1',
      highlights: [
        'Engineered RESTful backend',
        'Managed 100+ simulated customer queries',
        'Implemented CRUD APIs',
        'Developed using Spring Boot and MySQL'
      ]
    },
    {
      title: 'Counter Web Application',
      description: 'A modern Angular counter application with automated incremental functionality and a glassmorphism-inspired UI.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'UI/UX'],
      icon: 'fas fa-stopwatch',
      color: '#f43f5e',
      githubUrl: 'https://github.com/Meeramirsha/counterApp',
      demoUrl: 'https://counter-app-ecru-eta.vercel.app/',
      imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=Counter+App',
      highlights: [
        'Implemented auto-start/stop logic using intervals',
        'Created a glassmorphism-inspired modern UI',
        'Service-based state management',
        'Fully responsive dark theme'
      ]
    }
  ];
}
