import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WagesPayrollPage } from './wages-payroll.page';

const routes: Routes = [
  {
    path: '',
    component: WagesPayrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WagesPayrollPageRoutingModule {}
