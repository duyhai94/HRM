import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailFeedbackPageRoutingModule } from './mail-feedback-routing.module';

import { MailFeedbackPage } from './mail-feedback.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailFeedbackPageRoutingModule,
    SharedModule,
  ],
  declarations: [MailFeedbackPage]
})
export class MailFeedbackPageModule {}
