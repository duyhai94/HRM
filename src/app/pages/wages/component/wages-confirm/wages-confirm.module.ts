import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WagesConfirmPageRoutingModule } from './wages-confirm-routing.module';

import { WagesConfirmPage } from './wages-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WagesConfirmPageRoutingModule
  ],
  declarations: [WagesConfirmPage]
})
export class WagesConfirmPageModule {}
