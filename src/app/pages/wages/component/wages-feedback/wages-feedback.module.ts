import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WagesFeedbackPageRoutingModule } from './wages-feedback-routing.module';

import { WagesFeedbackPage } from './wages-feedback.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WagesFeedbackPageRoutingModule,
    SharedModule,
  ],
  declarations: [WagesFeedbackPage]
})
export class WagesFeedbackPageModule {}
