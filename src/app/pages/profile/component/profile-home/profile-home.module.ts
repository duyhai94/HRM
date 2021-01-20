import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileHomePageRoutingModule } from './profile-home-routing.module';
import { ProfileHomePage } from './profile-home.page';








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
