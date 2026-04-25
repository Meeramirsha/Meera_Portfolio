import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  color: string;
  icon: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Oasis Infobyte',
      role: 'Java Development Intern',
      period: 'June 2025 – July 2025',
      type: 'Online',
      color: '#f59e0b',
      icon: 'fab fa-java',
      highlights: [
        'Developed Java mini-projects including a library management system and a file encryption tool',
        'Applied Object-Oriented Programming principles, file handling, and exception handling',
        'Practiced debugging and reduced average program errors by 20% across projects'
      ]
    },
    {
      company: 'Pumo Technovation',
      role: 'Data Analytics Intern',
      period: 'January 2025',
      type: 'Remote',
      color: '#10b981',
      icon: 'fas fa-chart-bar',
      highlights: [
        'Cleaned and performed statistical analysis on 5+ datasets from financial and marketing sectors',
        'Used Python, Excel, and Tableau for data processing and visualization',
        'Created weekly sales performance reports, improving reporting accuracy from 75% to 93%'
      ]
    },
    {
      company: 'Prodigy Infotech',
      role: 'Full Stack Developer Intern',
      period: 'October 2024',
      type: 'Remote',
      color: '#8b5cf6',
      icon: 'fas fa-code',
      highlights: [
        'Developed and enhanced frontend features using HTML, CSS, and JavaScript',
        'Enhanced site responsiveness by 20% through optimization and testing',
        'Worked with cross-functional teams to deliver full-stack web features'
      ]
    }
  ];
}
