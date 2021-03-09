import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ForgotComponent } from "src/app/pages/auth/forgot/forgot.component";
import { ModalLeaveComponent } from "../modal-leave/modal-leave.component";
import { ModalTimekeepingComponent } from "../modal-timekeeping/modal-timekeeping.component";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  constructor(public modalController: ModalController) {}

  async TimeKeepingModal(checkInData) {
    const modal = await this.modalController.create({
      component: ModalTimekeepingComponent,
      cssClass: "my-custom-class",
      backdropDismiss: true,
      componentProps: {
        checkInData: checkInData,
      },
    });
    return await modal.present();
  }
  CloseModal() {
    this.modalController.dismiss();
  }

  async ForgotPassWork() {
    const modal = await this.modalController.create({
      component: ForgotComponent,
      cssClass: "modal-fotgot",
      backdropDismiss: true,
    });
    return await modal.present();
  }

  async LeaveModal() {
    const modal = await this.modalController.create({
      component: ModalLeaveComponent,
      cssClass: "modal-fotgot",
      backdropDismiss: true,
    });
    return await modal.present();
  }
}
