import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { mergeMap } from 'rxjs/operators';
import { SalaryDetailModel } from 'src/app/model/salary/salary-detail.model';
import { SalaryDetailService } from 'src/app/service/salary/salary-detail.service';
import { SalaryListService } from 'src/app/service/salary/salary-list.service';
import { WagesConfirmPage } from '../wages-confirm/wages-confirm.page';
import { WagesFeedbackPage } from '../wages-feedback/wages-feedback.page';

@Component({
  selector: 'app-salary-detail',
  templateUrl: './salary-detail.page.html',
  styleUrls: ['./salary-detail.page.scss'],
})
export class SalaryDetailPage implements OnInit {
  @Input() data;
  currentDate = new Date().toISOString();
  selected: boolean = false;
  selectedAmount: boolean = false;
  detailSalary: SalaryDetailModel;
  selectedMonth;
  selectedYear;
  currentSalaryMonthlyId;
  totalAmount;
  constructor(private modalController: ModalController, private salaryDetailService: SalaryDetailService, private salaryListService: SalaryListService) { }

  ngOnInit() {
    console.log(this.data);
    this.currentSalaryMonthlyId = this.data.MonthlySalaryId;
    this.getDetailService();
    this.totalAmount = this.data.InsuranceAmount + this.data.TaxAmount;
  }

  changeDate(e) {
    let selectedTime;
    selectedTime = new Date(e.detail.value);
    console.log(selectedTime);
    this.selectedMonth = selectedTime.getMonth();
    this.selectedYear = selectedTime.getFullYear();
    this.salaryListService.getListSalary(this.selectedMonth, this.selectedYear).pipe(mergeMap(res=>{
      this.currentSalaryMonthlyId = res.MonthlySalaryId;
      return this.salaryDetailService.getSalaryDetail(res.MonthlySalaryId);
    })).subscribe((res)=>{
      this.detailSalary = res;
    })
  }
  showInfo(){
    this.selected = !this.selected;
  }
  showAmount(){
    this.selectedAmount = !this.selectedAmount;
  }

  getDetailService(){
    this.salaryDetailService.getSalaryDetail(this.currentSalaryMonthlyId).subscribe((res)=>{
      this.detailSalary = res;
    })
  }

  async openModalFeedback(){
    const modal = await this.modalController.create({
      component: WagesFeedbackPage,
      cssClass: "salary-detail",
      componentProps: {
        data: this.data
      },
    });
    await modal.present();
  }
  async openModalConfirm() {
    this.salaryDetailService.updateSalaryDetaul(this.currentSalaryMonthlyId, {Status: 2}).subscribe((res)=>res);
    const modal = await this.modalController.create({
      component: WagesConfirmPage,
      cssClass: "salary-detail",
      componentProps: {
        data: this.data
      },
    });
    await modal.present();
  }
  
}
