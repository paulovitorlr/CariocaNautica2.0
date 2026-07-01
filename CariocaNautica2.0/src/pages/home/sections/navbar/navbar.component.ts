import { Component, Input } from '@angular/core';
import { NAVBAR_DATA } from '@core/data/home.data';
import { Navbar } from '@core/interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() data: Navbar = NAVBAR_DATA;

  menuOpen = false;

  get ctaHref(): string {
    return this.data.cta.target;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
  
}