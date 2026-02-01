import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-about-me',
  imports: [NavbarComponent],
  template: `
    <app-navbar />
    <div class="container">
      <h1>Bio</h1>
      <p>I'm a dude.</p>
    </div>
  `,
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
