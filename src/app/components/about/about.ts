import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  strengths = [
    { icon: 'fas fa-layer-group', title: 'Clean Architecture', desc: 'Writing maintainable, layered code following best practices and design patterns.' },
    { icon: 'fas fa-plug', title: 'REST API Integration', desc: 'Building and consuming RESTful APIs with proper design, validation, and error handling.' },
    { icon: 'fas fa-server', title: 'Scalable Backend', desc: 'Developing robust Spring Boot backends that scale and handle complex business logic.' },
    { icon: 'fas fa-mobile-alt', title: 'Responsive UI', desc: 'Crafting pixel-perfect, mobile-first interfaces with AngularJS and modern CSS.' },
    { icon: 'fas fa-brain', title: 'Problem Solving', desc: 'Analytical thinker who enjoys breaking down complex problems into elegant solutions.' }
  ];
}
