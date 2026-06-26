import { Component, Input } from '@angular/core';
import { PROBLEMS_SOLUTIONS_DATA } from '@core/data/home.data';
import { ProblemsSolutionsSection } from '@core/interfaces/problem-solution.interface';

@Component({
  selector: 'app-problems-solutions-section',
  standalone: true,
  templateUrl: './problems-solutions-section.component.html',
  styleUrl: './problems-solutions-section.component.scss',
})
export class ProblemsSolutionsSectionComponent {
  @Input() data: ProblemsSolutionsSection = PROBLEMS_SOLUTIONS_DATA;
}
