// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { TousdetailsComponent } from './tousdetails/tousdetails.component';
import { HomeComponent } from './home/home.component';
import { PiesComponent } from './pies/pies.component';
import { CheesecakeComponent } from './cheesecake/cheesecake.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige vers home par défaut
    { path: 'home', component: HomeComponent }, // Composant pour la page d'accueil
    { path: 'tousdetails', component: TousdetailsComponent }, // Composant pour tous les détails
    // Ajoutez d'autres routes ici si nécessaire
    { path: 'pies', component: PiesComponent }, // Composant pour tous les détails
    { path: 'cheesecake', component: CheesecakeComponent }, // Composant pour tous les détails

];
