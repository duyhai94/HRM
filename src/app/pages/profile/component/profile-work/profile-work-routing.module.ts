import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileWorkPage } from './profile-work.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileWorkPageRoutingModule {}
