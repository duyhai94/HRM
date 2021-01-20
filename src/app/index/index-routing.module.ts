import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
      // path welcome
      {
       path : 'login',
       loadChildren: () => import("../pages/auth/login/login.module").then((m) => m.LoginPageModule)
      },
      {
        path: 'sign',
        loadChildren: () => import("../pages/auth/sign/sign.module").then((m) => m.SignPageModule)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
