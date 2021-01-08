import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailPage } from './mail.page';

const routes: Routes = [

  {
    path: 'mail-home',
    loadChildren: () => import('./component/mail-home/mail-home.module').then( m => m.MailHomePageModule)
  },
  {
    path: 'mail-feedback',
    loadChildren: () => import('./component/mail-feedback/mail-feedback.module').then( m => m.MailFeedbackPageModule)
  },
  {
    path: '',
    redirectTo: 'mail-home',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailPageRoutingModule {}
