import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  school: string;
  degree: string;
  period: string;
  score: string;
  icon: string;
  highlights: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  educationList: Education[] = [
    {
      school: 'Kings Engineering College, Anna University',
      degree: 'Bachelor of Engineering, Computer Science and Engineering',
      period: '2022 - 2026',
      score: '8.45/10 CGPA',
      icon: 'fas fa-graduation-cap',
      highlights: [
        'Specializing in Full Stack Development and Database Management.',
        'Core subjects: Data Structures, Algorithms, DBMS, Operating Systems, and Java.',
        'Active participant in technical seminars and coding workshops.'
      ]
    },
    {
      school: "St. Joseph's Matriculation Higher Secondary School",
      degree: 'HSC',
      period: '2021 - 2022',
      score: '76.5%',
      icon: 'fas fa-school',
      highlights: [
        'Studied Computer Science, Physics, Chemistry, and Mathematics.',
        'Developed a strong foundation in logic and analytical reasoning.'
      ]
    },
    {
      school: 'Nav Bharath Vidhyalaya Matriculation Higher Secondary School',
      degree: 'SSLC',
      period: '2019 - 2020',
      score: '93%',
      icon: 'fas fa-book',
      highlights: [
        'Completed secondary education with distinction.',
        'Consistent academic performance across all subjects.'
      ]
    }
  ];
}
