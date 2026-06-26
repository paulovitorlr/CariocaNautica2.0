import { Component, Input } from '@angular/core';
import { CONTACT_DATA } from '@core/data/home.data';
import { Contact } from '@core/interfaces/contact.interface';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  @Input() data: Contact = CONTACT_DATA;
}
