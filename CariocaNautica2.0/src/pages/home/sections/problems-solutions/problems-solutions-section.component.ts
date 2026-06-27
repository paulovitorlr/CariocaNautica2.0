import {
  Component,
  HostListener,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';

import { PROBLEMS_SOLUTIONS_DATA } from '@core/data/home.data';
import { ProblemsSolutionsSection } from '@core/interfaces/problem-solution.interface';

@Component({
  selector: 'app-problems-solutions-section',
  standalone: true,
  templateUrl: './problems-solutions-section.component.html',
  styleUrl: './problems-solutions-section.component.scss',
})
export class ProblemsSolutionsSectionComponent implements OnInit, OnDestroy {

  @Input()
  data: ProblemsSolutionsSection = PROBLEMS_SOLUTIONS_DATA;

  currentIndex = 0;

  // Agora dinâmico, em vez de fixo em 3 (alinhado com os breakpoints do SCSS)
  cardsPerView = 3;

  private autoplay?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.updateCardsPerView();
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateCardsPerView();
  }

  private updateCardsPerView(): void {

    if (typeof window === 'undefined') {
      return; // segurança para SSR
    }

    const width = window.innerWidth;

    if (width <= 768) {
      this.cardsPerView = 1;
    } else if (width <= 1024) {
      this.cardsPerView = 2;
    } else {
      this.cardsPerView = 3;
    }

    // evita ficar com um índice inválido depois de redimensionar a tela
    this.currentIndex = Math.min(this.currentIndex, this.maxIndex);

  }

  get maxIndex(): number {
    return Math.max(this.data.items.length - this.cardsPerView, 0);
  }

  // usado para gerar a quantidade correta de dots
  get dots(): number[] {
    return Array.from({ length: this.maxIndex + 1 }, (_, i) => i);
  }

  // substitui o "[].constructor(item.rating)"
  getStars(rating: number): number[] {
    return Array.from({ length: rating }, (_, i) => i);
  }

  startAutoplay(): void {

    this.stopAutoplay();

    this.autoplay = setInterval(() => {
      this.next();
    }, 8000);

  }

  stopAutoplay(): void {

    if (this.autoplay) {
      clearInterval(this.autoplay);
      this.autoplay = undefined;
    }

  }

  next(): void {

    if (this.currentIndex >= this.maxIndex) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }

    this.startAutoplay(); // reinicia a contagem dos 8s a cada interação

  }

  previous(): void {

    if (this.currentIndex <= 0) {
      this.currentIndex = this.maxIndex;
    } else {
      this.currentIndex--;
    }

    this.startAutoplay();

  }

  goTo(index: number): void {

    this.currentIndex = Math.min(Math.max(index, 0), this.maxIndex);

    this.startAutoplay();

  }

  get trackTransform(): string {
    return `translateX(-${this.currentIndex * (100 / this.cardsPerView)}%)`;
  }

}