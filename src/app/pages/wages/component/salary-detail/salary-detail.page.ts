import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SalaryDetailService } from 'src/app/service/salary/salary-detail.service';
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
  constructor(private modalController: ModalController, private salaryDetailService: SalaryDetailService) { }

  ngOnInit() {
    console.log(this.data);
    
  }

  changeDate(e) {
    
  }

  getDetailService(){
    
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
