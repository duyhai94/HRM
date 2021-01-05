import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileHomePageRoutingModule } from './profile-home-routing.module';

import { ProfileHomePage } from './profile-home.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileHomePageRoutingModule,
    SharedModule,
  ],
  declarations: [ProfileHomePage]
})
export class ProfileHomePageModule {}
