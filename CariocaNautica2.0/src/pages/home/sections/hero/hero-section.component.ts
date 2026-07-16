import { Component, Input } from '@angular/core';
import { HERO_DATA } from '@core/data/home.data';
import { Hero } from '@core/interfaces/hero.interface';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  @Input() data: Hero = HERO_DATA;

  get ctaHref(): string {
  return this.data.cta.target;
}

get secondaryCtaHref(): string {
  return this.data.secondaryCta.target;
}
}
