import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home-center',
    loadChildren: () => import('./pages/home-center/home-center.module').then( m => m.HomeCenterPageModule)
  }, 
  {
    path: 'home-leave',
    loadChildren: () => import('./pages/home-leave/home-leave.module').then( m => m.HomeLeavePageModule)
  },
 
  {
    path: '',
    redirectTo: 'home-center',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
