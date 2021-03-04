import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WagesPage } from './wages.page';

const routes: Routes = [
  {
    path: 'wages-home',
    loadChildren: () => import('./component/wages-home/wages-home.module').then( m => m.WagesHomePageModule)
  },
  {
    path: 'wages-payroll',
    loadChildren: () => import('./component/wages-payroll/wages-payroll.module').then( m => m.WagesPayrollPageModule)
  },
  {
    path: 'wages-feedback',
    loadChildren: () => import('./component/wages-feedback/wages-feedback.module').then( m => m.WagesFeedbackPageModule)
  },
  {
    path: 'wages-confirm',
    loadChildren: () => import('./component/wages-confirm/wages-confirm.module').then( m => m.WagesConfirmPageModule)
  },

  {
    path: '',
    redirectTo: 'wages-home',
    pathMatch: 'full'
  },

 
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WagesPageRoutingModule {}
