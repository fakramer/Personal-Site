import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-development',
  imports: [NavbarComponent],
  templateUrl: './development.component.html',
  styleUrl: './development.component.scss'
})
export class DevelopmentComponent {
  experience = inject(ExperienceService);
}
