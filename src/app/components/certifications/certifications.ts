import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  iconColor: string;
  link: string;
  description: string[];
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      title: 'JAVA Full Stack course',
      issuer: 'Techademy / Kings Engineering College',
      date: 'Oct 2025',
      icon: 'fab fa-java',
      iconColor: '#f89820',
      link: 'certifications/MEERA S - CSE Java Certificate.pdf',
      description: [
        'Mastered full-stack development using Java, Spring Boot, and modern frontend technologies.'
      ]
    },
    {
      title: 'AngularJS Essentials - Beginner to Advanced',
      issuer: 'Udemy',
      date: 'Sept 2025',
      icon: 'fab fa-angular',
      iconColor: '#dd0031',
      link: 'certifications/AngularJsEssentials_Meera.pdf',
      description: [
        'Comprehensive training in building dynamic single-page applications using the AngularJS framework.'
      ]
    },
    {
      title: '2025 Complete SQL Bootcamp',
      issuer: 'Udemy',
      date: 'Oct 2025',
      icon: 'fas fa-database',
      iconColor: '#00758F',
      link: 'certifications/complete SQL_Bootcamp_Meera.pdf',
      description: [
        'Gained advanced proficiency in SQL for data manipulation, querying, and database management.'
      ]
    },
    {
      title: 'HTML5 - The Language',
      issuer: 'Infosys Springboard',
      date: 'June 2025',
      icon: 'fab fa-html5',
      iconColor: '#E34F26',
      link: 'certifications/HTML5_Meera.pdf',
      description: [
        'Deep dive into semantic HTML5 elements for building modern, accessible websites.'
      ]
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'Nov 2024',
      icon: 'fas fa-mobile-alt',
      iconColor: '#0a0a23',
      link: 'certifications/ResponsiveWebDesign_Meera.pdf',
      description: [
        'Extensive training in mobile-first design principles using CSS Grid and Flexbox.'
      ]
    },
    {
      title: 'Advanced Diploma in Python Programming',
      issuer: 'CSC',
      date: '2020',
      icon: 'fab fa-python',
      iconColor: '#3776AB',
      link: '#',
      description: [
        'Comprehensive diploma covering Python fundamentals to advanced programming concepts.'
      ]
    }
  ];
}
