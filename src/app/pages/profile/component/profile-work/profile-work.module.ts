import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileWorkPageRoutingModule } from './profile-work-routing.module';

import { ProfileWorkPage } from './profile-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileWorkPageRoutingModule
  ],
  declarations: [ProfileWorkPage]
})
export class ProfileWorkPageModule {}
