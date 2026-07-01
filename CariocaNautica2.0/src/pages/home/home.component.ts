import { Component } from '@angular/core';
import { AboutSectionComponent } from './sections/about/about-section.component';
import { ContactSectionComponent } from './sections/contact/contact-section.component';
import { FeedbacksSectionComponent } from './sections/feedbacks/feedbacks-section.component';
import { FooterSectionComponent } from './sections/footer/footer-section.component';
import { HeroSectionComponent } from './sections/hero/hero-section.component';
import { ProblemsSolutionsSectionComponent } from './sections/problems-solutions/problems-solutions-section.component';
import { ProcessSectionComponent } from './sections/process/process-section.component';
import { SegmentsSectionComponent } from './sections/segments/segments-section.component';
import { NavbarComponent } from './sections/navbar/navbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ProblemsSolutionsSectionComponent,
    ProcessSectionComponent,
    FeedbacksSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent,
    SegmentsSectionComponent,
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
