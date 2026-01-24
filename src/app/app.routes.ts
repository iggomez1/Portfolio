import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Research } from './pages/research/research';
import { Contact } from './pages/contact/contact';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'research', component: Research },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
