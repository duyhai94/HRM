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
    path: 'salary-detail',
    loadChildren: () => import('./component/salary-detail/salary-detail.module').then( m => m.SalaryDetailPageModule)
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
