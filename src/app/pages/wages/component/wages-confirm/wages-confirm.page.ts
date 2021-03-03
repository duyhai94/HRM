import { Component, Input, OnInit } from '@angular/core';
import { SalaryDetailModel } from 'src/app/model/salary/salary-detail.model';
import { SalaryDetailService } from 'src/app/service/salary/salary-detail.service';

@Component({
  selector: 'app-wages-confirm',
  templateUrl: './wages-confirm.page.html',
  styleUrls: ['./wages-confirm.page.scss'],
})
export class WagesConfirmPage implements OnInit {
  selected: boolean = false;
  @Input() data;
  detailSalary: SalaryDetailModel;
  selectedAmount: boolean= false;
  totalAmount;
  constructor( private salaryDetailService: SalaryDetailService) { }

  ngOnInit() {
    this.getDetailService();
    this.totalAmount = this.data.InsuranceAmount + this.data.TaxAmount;
  }

  showAmount(){
    this.selectedAmount = !this.selectedAmount;
  }
  getDetailService(){
    this.salaryDetailService.getSalaryDetail(this.data.MonthlySalaryId).subscribe((res)=>{
      this.detailSalary = res;
    })
  }

  showInfo(){
    this.selected = !this.selected;
  }
}
