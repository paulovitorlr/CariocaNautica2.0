import { Component, Input } from '@angular/core';
import { FOOTER_DATA } from '@core/data/home.data';
import { Footer } from '@core/interfaces/footer.interface';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss',
})
export class FooterSectionComponent {
  @Input() data: Footer = FOOTER_DATA;
}
