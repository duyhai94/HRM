import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCenterPage } from './home-center.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCenterPageRoutingModule {}
