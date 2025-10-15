import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';



export const routes: Routes = [{
    path: '', component: HomeComponent, title: 'Inicio'
},
{path: 'Quien_Soy', component: AboutMeComponent, title: 'Quién Soy'}
];
