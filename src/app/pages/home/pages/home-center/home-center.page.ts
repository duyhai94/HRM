import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/shared/service/alert.service';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
  selector: 'app-home-center',
  templateUrl: './home-center.page.html',
  styleUrls: ['./home-center.page.scss'],
})
export class HomeCenterPage implements OnInit {

  constructor( public modalService : ModalService,) { }

  ngOnInit() {
  }
  timeKeeping() {
    this.modalService.TimeKeepingModal();
    setTimeout(() => {
      this.modalService.CloseModal();
    },3000);
  }
 
}
