import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCenterPageRoutingModule } from './home-center-routing.module';

import { HomeCenterPage } from './home-center.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCenterPageRoutingModule,
    SharedModule,
  ],
  declarations: [HomeCenterPage]
})
export class HomeCenterPageModule {}
