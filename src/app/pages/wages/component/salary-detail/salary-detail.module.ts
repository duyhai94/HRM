import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaryDetailPageRoutingModule } from './salary-detail-routing.module';

import { SalaryDetailPage } from './salary-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaryDetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [SalaryDetailPage]
})
export class SalaryDetailPageModule {}
