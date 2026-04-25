import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
  color: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: 'Programming',
      icon: 'fas fa-code',
      skills: [
        { name: 'Java', icon: 'fab fa-java', level: 90, color: '#f59e0b' },
        { name: 'Python', icon: 'fab fa-python', level: 75, color: '#3b82f6' }
      ]
    },
    {
      category: 'Frontend',
      icon: 'fas fa-laptop-code',
      skills: [
        { name: 'HTML5', icon: 'fab fa-html5', level: 92, color: '#f97316' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', level: 88, color: '#3b82f6' },
        { name: 'JavaScript', icon: 'fab fa-js-square', level: 80, color: '#eab308' },
        { name: 'AngularJS', icon: 'fab fa-angular', level: 82, color: '#ef4444' }
      ]
    },
    {
      category: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'Spring Boot', icon: 'fas fa-leaf', level: 85, color: '#10b981' },
        { name: 'REST APIs', icon: 'fas fa-plug', level: 88, color: '#8b5cf6' }
      ]
    },
    {
      category: 'Database',
      icon: 'fas fa-database',
      skills: [
        { name: 'MySQL', icon: 'fas fa-database', level: 82, color: '#06b6d4' }
      ]
    },
    {
      category: 'Tools & Version Control',
      icon: 'fas fa-tools',
      skills: [
        { name: 'GitHub', icon: 'fab fa-github', level: 85, color: '#94a3b8' },
        { name: 'VS Code', icon: 'fas fa-code', level: 90, color: '#3b82f6' },
        { name: 'IntelliJ IDEA', icon: 'fas fa-lightbulb', level: 82, color: '#f97316' },
        { name: 'Postman', icon: 'fas fa-paper-plane', level: 80, color: '#f59e0b' }
      ]
    },
    {
      category: 'Core Competencies',
      icon: 'fas fa-brain',
      skills: [
        { name: 'OOPS', icon: 'fas fa-atom', level: 90, color: '#10b981' },
        { name: 'Team Collaboration', icon: 'fas fa-users', level: 85, color: '#3b82f6' },
        { name: 'Communication', icon: 'fas fa-comments', level: 88, color: '#f59e0b' },
        { name: 'Adaptability', icon: 'fas fa-sync', level: 82, color: '#8b5cf6' }
      ]
    }
  ];
}
