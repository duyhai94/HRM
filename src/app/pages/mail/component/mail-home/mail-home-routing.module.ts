import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailHomePage } from './mail-home.page';

const routes: Routes = [
  {
    path: '',
    component: MailHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailHomePageRoutingModule {}
