import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-about-me',
  imports: [NavbarComponent],
  template: `
    <app-navbar />
    <div class="container">
      <h1>Bio</h1>
      <p>I'm a dude. Dudes, being a subset of humans, do a lot of things. As a human doing things, one of them is developing software. In the breathtaking complexities of the modern global economy, I'm fortunate enough to be in a position where I can trade the time I spend developing specific software for the resources I need to sustain myself and my family. It's a wild time to be alive.</p>
    </div>
  `,
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
