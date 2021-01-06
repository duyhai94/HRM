import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeLeavePageRoutingModule } from './home-leave-routing.module';

import { HomeLeavePage } from './home-leave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeLeavePageRoutingModule
  ],
  declarations: [HomeLeavePage]
})
export class HomeLeavePageModule {}
