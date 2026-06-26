import { Component, Input } from '@angular/core';
import { ABOUT_DATA } from '@core/data/home.data';
import { About } from '@core/interfaces/about.interface';

@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  @Input() data: About = ABOUT_DATA;
}
