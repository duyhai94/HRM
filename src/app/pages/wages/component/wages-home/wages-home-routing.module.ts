import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WagesHomePage } from './wages-home.page';

const routes: Routes = [
  {
    path: '',
    component: WagesHomePage
  },  {
    path: 'detail-event',
    loadChildren: () => import('./detail-event/detail-event.module').then( m => m.DetailEventPageModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WagesHomePageRoutingModule {}
