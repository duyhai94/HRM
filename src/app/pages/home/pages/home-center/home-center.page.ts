import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
import { interval, Observable, timer } from "rxjs";
import { map } from "rxjs/operators";
import { CheckInDay } from "src/app/model/time/check-in-day.model";
import { TimeKeepingModal } from "src/app/model/time/timekeeping.model";
import { TimeKeepingService } from "src/app/service/time/time-keeping.service";
import { AlertService } from "src/app/shared/service/alert.service";
import { ModalService } from "src/app/shared/service/modal.service";

@Component({
  selector: "app-home-center",
  templateUrl: "./home-center.page.html",
  styleUrls: ["./home-center.page.scss"],
})
export class HomeCenterPage implements OnInit {
  //model
  timeKeepingModal: TimeKeepingModal;
  today = new Date().getFullYear() + '-' + new Date().getMonth() + '-'+  new Date().getDate();
  checkInDay: CheckInDay;
  fakeData = {
    WorkingDay :  this.today,
    CheckinTime: '8.45 AM',
    CheckoutTime: '',
    Duration: 5,
  }
  //time today
  constructor(
    public modalService: ModalService,
    private timeService: TimeKeepingService,
    private alertController: AlertController,
  ) {}

  ngOnInit() {
  }
  getCheckInDay() {
    this.timeService.getReportDate(this.today).subscribe((res:any) => {
      this.checkInDay = res;
    })
    this.checkInDay = this.fakeData;
  }
  timeKeeping(checkInData) {
    this.modalService.TimeKeepingModal(checkInData);    
    setTimeout(() => {
      this.modalService.CloseModal();
    }, 3000);
  }
  public time$: Observable<Date> = timer(0, 1000).pipe(map(() => new Date()));
  white_check_mark;
  eyes;
  raised_hands;
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'home-alert',
      header: 'Confirm!',
      message: 'Bạn có muốn chấm công?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.getCheckInDay();
            this.timeKeeping(this.checkInDay);
          }
        }
      ]
    });
    await alert.present();
  }
}
