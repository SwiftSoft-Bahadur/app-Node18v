import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
     // Wildcard route for 404 page
  { path: '**', component: NotFoundComponent },
];
