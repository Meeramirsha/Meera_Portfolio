import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit {
  @Output() themeToggle = new EventEmitter<boolean>();

  isMenuOpen = false;
  isScrolled = false;
  activeSection = 'home';

  navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  ngOnInit() {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'certifications', 'contact'];
    for (const sectionId of sections.reverse()) {
      const el = document.getElementById(sectionId);
      if (el && window.scrollY >= el.offsetTop - 100) {
        this.activeSection = sectionId;
        break;
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }


  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMenu();
  }
}
