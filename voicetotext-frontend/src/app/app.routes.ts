import { Routes } from '@angular/router';
import { HomeVttComponent } from './components/home-vtt/home-vtt.component';

export const routes: Routes = [
  { path: 'home', component: HomeVttComponent },
  { path: '**', component: HomeVttComponent },
];
