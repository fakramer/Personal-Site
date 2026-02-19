import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="#">
          <img class="shield" src="assets/coat-of-arms.svg" alt="coat of arms" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" routerLink="/bio">About me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" routerLink="/development">Software development</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" routerLink="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Interests
              </a>
              <ul class="dropdown-menu">
                <li><a routerLink="#" class="dropdown-item">Birds</a></li>
                <li><a routerLink="#" class="dropdown-item">Carpentry</a></li>
                <li><a routerLink="#" class="dropdown-item">Heraldry</a></li>
                <li><a routerLink="#" class="dropdown-item">Sailing</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" routerLink="#">Recipes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" routerLink="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
