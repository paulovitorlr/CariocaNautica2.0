import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  imports: [],
  templateUrl: './floating-whatsapp.component.html',
  styleUrl: './floating-whatsapp.component.scss'
})
export class FloatingWhatsappComponent {

  private readonly whatsappUrl =
    'https://wa.me/5521969252525?text=Olá! Gostaria%20de%20um%20orçamento.';

  openWhatsApp(): void {
    window.open(this.whatsappUrl, '_blank');
  }
}