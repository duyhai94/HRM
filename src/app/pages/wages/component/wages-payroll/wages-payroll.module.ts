import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WagesPayrollPageRoutingModule } from './wages-payroll-routing.module';

import { WagesPayrollPage } from './wages-payroll.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SalaryDetailPage } from '../salary-detail/salary-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WagesPayrollPageRoutingModule,
    SharedModule,

  ],
  declarations: [WagesPayrollPage]
})
export class WagesPayrollPageModule {}
