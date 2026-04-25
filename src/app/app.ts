import { Component, OnInit, HostListener } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { ExperienceComponent } from './components/experience/experience';
import { EducationComponent } from './components/education/education';
import { CertificationsComponent } from './components/certifications/certifications';
import { ContactComponent } from './components/contact/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationsComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  isLoading = true;
  scrollProgress = 0;

  ngOnInit() {
    // Page load animation
    setTimeout(() => {
      this.isLoading = false;
      this.initScrollReveal();
    }, 1200);
  }

  @HostListener('window:scroll')
  onScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (winScroll / height) * 100;
    this.checkRevealElements();
  }


  initScrollReveal() {
    this.checkRevealElements();
  }

  checkRevealElements() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('revealed');
      }
    });
  }
}
