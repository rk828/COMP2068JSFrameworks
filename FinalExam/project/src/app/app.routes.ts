import { Routes } from '@angular/router';

import { StudentsComponent } from './students/students.component';

export const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StudentsComponent },
  
];