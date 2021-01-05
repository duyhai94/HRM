import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageDetailPageRoutingModule } from './message-detail-routing.module';

import { MessageDetailPage } from './message-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageDetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [MessageDetailPage]
})
export class MessageDetailPageModule {}
