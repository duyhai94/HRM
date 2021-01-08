import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WagesFeedbackPage } from './wages-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: WagesFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WagesFeedbackPageRoutingModule {}
