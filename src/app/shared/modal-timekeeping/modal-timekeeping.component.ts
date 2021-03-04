import { Component, Input, OnInit } from '@angular/core';
import { CheckInDay } from 'src/app/model/time/check-in-day.model';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-modal-timekeeping',
  templateUrl: './modal-timekeeping.component.html',
  styleUrls: ['./modal-timekeeping.component.scss'],
})
export class ModalTimekeepingComponent implements OnInit {
  @Input() checkInData: CheckInDay;
  constructor(public modalService : ModalService,) { }

  ngOnInit() {
    console.log(this.checkInData);
    
  }
  closeModal(){
    this.modalService.CloseModal();
  }
}
