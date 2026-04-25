import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  contactInfo = {
    email: 'meerasankar00@gmail.com',
    phone: '+91 90250 78335',
    location: 'Mangadu, Chennai, Tamil Nadu, India'
  };
}
