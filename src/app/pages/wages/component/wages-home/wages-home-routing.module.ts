import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WagesHomePage } from './wages-home.page';

const routes: Routes = [
  {
    path: '',
    component: WagesHomePage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WagesHomePageRoutingModule {}
