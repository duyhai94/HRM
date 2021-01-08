import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WagesConfirmPageRoutingModule } from './wages-confirm-routing.module';

import { WagesConfirmPage } from './wages-confirm.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WagesConfirmPageRoutingModule,
    SharedModule,
  ],
  declarations: [WagesConfirmPage]
})
export class WagesConfirmPageModule {}
