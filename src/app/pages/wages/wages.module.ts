import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WagesPageRoutingModule } from './wages-routing.module';

import { WagesPage } from './wages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WagesPageRoutingModule
  ],
  declarations: [WagesPage]
})
export class WagesPageModule {}
