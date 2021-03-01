import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { SalaryListModel } from 'src/app/model/salary/salary-list.model';
import { SalaryListService } from 'src/app/service/salary/salary-list.service';
import { SalaryDetailPage } from '../salary-detail/salary-detail.page';

@Component({
  selector: 'app-wages-payroll',
  templateUrl: './wages-payroll.page.html',
  styleUrls: ['./wages-payroll.page.scss'],
})
export class WagesPayrollPage implements OnInit {
  listSalaryOfYear: SalaryListModel[];
  currentDate = new Date().toISOString();
  selectedYear = new Date().getFullYear();
  constructor(private salaryListService: SalaryListService, public modalController: ModalController) { }

  ngOnInit() {
  }
  changeDate(e){
    let date = new Date(e.detail.value);
    this.selectedYear = date.getFullYear();
    console.log(this.selectedYear);
    
    
  }
  async openModal(item){

      const modal = await this.modalController.create({
        component: SalaryDetailPage,
        cssClass: 'my-custom-class',
        componentProps: {
          data: item
        }
      });
      return await modal.present();
    }
  
  getListSalayOfMonth(){
    this.salaryListService.getListSalaryOfYear(this.selectedYear).subscribe((res) =>{
      this.listSalaryOfYear = res;
    })
  }

}
