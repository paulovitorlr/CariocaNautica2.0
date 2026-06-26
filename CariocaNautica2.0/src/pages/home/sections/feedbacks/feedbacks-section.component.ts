import { Component, Input } from '@angular/core';
import { FEEDBACKS_DATA } from '@core/data/home.data';
import { FeedbacksSection } from '@core/interfaces/feedback.interface';

@Component({
  selector: 'app-feedbacks-section',
  standalone: true,
  templateUrl: './feedbacks-section.component.html',
  styleUrl: './feedbacks-section.component.scss',
})
export class FeedbacksSectionComponent {
  @Input() data: FeedbacksSection = FEEDBACKS_DATA;
}
