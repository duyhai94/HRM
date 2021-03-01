import { Component, Input, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header-detail',
  templateUrl: './header-detail.component.html',
  styleUrls: ['./header-detail.component.scss'],
})
export class HeaderDetailComponent implements OnInit {
  @Input() headerTitle;
  @Input() isModal;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // this.routerOutlet.b
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
