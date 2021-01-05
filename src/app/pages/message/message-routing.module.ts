import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagePage } from './message.page';

const routes: Routes = [
  {
    path: 'message-home',
    loadChildren: () => import('./component/message-home/message-home.module').then( m => m.MessageHomePageModule)
  },
  {
    path: 'message-detail',
    loadChildren: () => import('./component/message-detail/message-detail.module').then( m => m.MessageDetailPageModule)
  },  
  {
    path: '',
    redirectTo: 'message-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagePageRoutingModule {}
