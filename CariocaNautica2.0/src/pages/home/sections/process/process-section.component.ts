import { Component, Input } from '@angular/core';
import { PROCESS_DATA } from '@core/data/home.data';
import { ProcessSection } from '@core/interfaces/process-step.interface';

@Component({
  selector: 'app-process-section',
  standalone: true,
  templateUrl: './process-section.component.html',
  styleUrl: './process-section.component.scss',
})
export class ProcessSectionComponent {
  @Input() data: ProcessSection = PROCESS_DATA;
}
