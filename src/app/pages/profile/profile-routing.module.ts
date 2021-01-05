import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: 'profile-home',
    loadChildren: () => import('./component/profile-home/profile-home.module').then( m => m.ProfileHomePageModule)
  },
  {
    path: 'profile-detail',
    loadChildren: () => import('./component/profile-detail/profile-detail.module').then( m => m.ProfileDetailPageModule)
  },
  {
    path: 'profile-work',
    loadChildren: () => import('./component/profile-work/profile-work.module').then( m => m.ProfileWorkPageModule)
  },
  {
    path: '',
    redirectTo: 'profile-home',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
