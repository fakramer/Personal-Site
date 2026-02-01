import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DevelopmentComponent } from './development/development.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Frank A. Kramer IV",
    },
    {
        path: 'bio',
        component: AboutMeComponent,
        title: "Frank A. Kramer IV | Bio"
    },
    {
        path: 'development',
        component: DevelopmentComponent,
        title: "Frank A. Kramer IV | Development"
    }
];
