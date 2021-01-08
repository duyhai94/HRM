import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailFeedbackPage } from './mail-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: MailFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailFeedbackPageRoutingModule {}
