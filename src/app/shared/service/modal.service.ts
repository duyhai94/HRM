import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalTimekeepingComponent } from '../modal-timekeeping/modal-timekeeping.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    public modalController: ModalController,
  
    ) { }


    async TimeKeepingModal() {
      const modal = await this.modalController.create({
        component: ModalTimekeepingComponent,
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    }
     CloseModal(){
      this.modalController.dismiss();
    }
}
