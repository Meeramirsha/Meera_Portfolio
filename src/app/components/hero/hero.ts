import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = '';
  currentIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingInterval: any;

  typingTexts = [
    'Full Stack Developer',
    'Software Engineer',
    'Java Developer',
    'Spring Boot Developer'
  ];

  ngOnInit() {
    this.startTyping();
  }

  ngOnDestroy() {
    clearTimeout(this.typingInterval);
  }

  startTyping() {
    const current = this.typingTexts[this.currentIndex];
    const speed = this.isDeleting ? 60 : 120;
    const pause = 2000;

    if (this.isDeleting) {
      this.typedText = current.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.typedText = current.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    if (!this.isDeleting && this.charIndex === current.length) {
      this.typingInterval = setTimeout(() => {
        this.isDeleting = true;
        this.startTyping();
      }, pause);
      return;
    }

    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.typingTexts.length;
    }

    this.typingInterval = setTimeout(() => this.startTyping(), speed);
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
