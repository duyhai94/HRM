import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WagesConfirmPage } from './wages-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: WagesConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WagesConfirmPageRoutingModule {}
