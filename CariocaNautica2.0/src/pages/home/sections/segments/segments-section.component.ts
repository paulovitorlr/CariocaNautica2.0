import { Component, Input } from '@angular/core';

import { SEGMENTS_DATA } from '@core/data/home.data';
import { SegmentsSection } from '@core/interfaces/segments.interface';

@Component({
  selector: 'app-segments-section',
  standalone: true,
  templateUrl: './segments-section.component.html',
  styleUrl: './segments-section.component.scss',
})
export class SegmentsSectionComponent {

  @Input() data: SegmentsSection = SEGMENTS_DATA;

}