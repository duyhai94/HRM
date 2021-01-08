import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailHomePageRoutingModule } from './mail-home-routing.module';

import { MailHomePage } from './mail-home.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailHomePageRoutingModule,
    SharedModule,
  ],
  declarations: [MailHomePage]
})
export class MailHomePageModule {}
