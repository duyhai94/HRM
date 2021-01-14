import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.page.html',
  styleUrls: ['./detail-event.page.scss'],
})

export class DetailEventPage implements OnInit {
@Input() data;
  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  dismiss() {
    this.modalController.dismiss();
  }
}
