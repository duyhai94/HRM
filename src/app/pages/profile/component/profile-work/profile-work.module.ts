import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileWorkPageRoutingModule } from './profile-work-routing.module';

import { ProfileWorkPage } from './profile-work.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileWorkPageRoutingModule,
    SharedModule,
  ],
  declarations: [ProfileWorkPage]
})
export class ProfileWorkPageModule {}
