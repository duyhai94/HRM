import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaryDetailPageRoutingModule } from './salary-detail-routing.module';

import { SalaryDetailPage } from './salary-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalaryDetailPageRoutingModule
  ],
  declarations: [SalaryDetailPage]
})
export class SalaryDetailPageModule {}
