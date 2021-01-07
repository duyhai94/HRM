import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-modal-timekeeping',
  templateUrl: './modal-timekeeping.component.html',
  styleUrls: ['./modal-timekeeping.component.scss'],
})
export class ModalTimekeepingComponent implements OnInit {

  constructor(public modalService : ModalService,) { }

  ngOnInit() {}
  closeModal(){
    this.modalService.CloseModal();
  }
}
