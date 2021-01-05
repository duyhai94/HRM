import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageHomePageRoutingModule } from './message-home-routing.module';

import { MessageHomePage } from './message-home.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageHomePageRoutingModule,
    SharedModule,
  ],
  declarations: [MessageHomePage]
})
export class MessageHomePageModule {}
