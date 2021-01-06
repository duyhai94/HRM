import { Injectable } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { AlertOptions } from "@ionic/core";
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor( public alertController: AlertController ) { }

  ngOnInit() {}

  async  TimeKeeping() {
    const alert = await this.alertController.create({
      cssClass: 'time-keeping-false',
      // header: 'Alert',
      subHeader: 'U checked in at 08:45 AM ',
      message: 'U are late 15 mins',
      // buttons: ['OK']
    });

    await alert.present();
  }
  closeAlert(){
    this.alertController.dismiss();
  }
}
