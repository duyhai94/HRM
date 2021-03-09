import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalService } from "../service/modal.service";
import { CalendarComponent } from "ionic2-calendar";

@Component({
  selector: "app-modal-leave",
  templateUrl: "./modal-leave.component.html",
  styleUrls: ["./modal-leave.component.scss"],
})
export class ModalLeaveComponent implements OnInit {
  viewTitle;
  isToday: boolean;
  leaveCalendar = {
    mode: "month",
    currentDate: new Date(),
  };
  selectedDate;

  currentDate = new Date();
  eventSource = [];
  calendar = {
    mode: "month",
    currentDate: new Date(),
  };
  dayDetail = false;
  @ViewChild(CalendarComponent, null) mycalendar: CalendarComponent;

  constructor(private modalService: ModalService) {}
  ngOnInit() {}

  close() {
    this.modalService.CloseModal();
  }

  onTimeSelected(ev) {
    console.log(ev);
  }

  slideNext() {
    this.mycalendar.slideNext();
  }

  slidePrev() {
    this.mycalendar.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  changeMode(mode) {
    this.leaveCalendar.mode = mode;
  }

  today() {
    this.leaveCalendar.currentDate = new Date();
  }

  onCurrentDateChanged(event: Date) {
    console.log(event);
  }
}
