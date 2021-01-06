import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLeavePage } from './home-leave.page';

const routes: Routes = [
  {
    path: '',
    component: HomeLeavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLeavePageRoutingModule {}
