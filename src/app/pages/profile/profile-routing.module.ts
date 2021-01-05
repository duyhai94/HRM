import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'profile-detail',
    loadChildren: () => import('./component/profile-detail/profile-detail.module').then( m => m.ProfileDetailPageModule)
  },
  {
    path: 'profile-work',
    loadChildren: () => import('./component/profile-work/profile-work.module').then( m => m.ProfileWorkPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
