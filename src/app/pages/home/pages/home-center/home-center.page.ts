import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
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
  currentMonth: number = new Date().getMonth() + 1;
  currentYear: number = new Date().getFullYear();
  //time today
  today = new Date();
  todaysDataTime = "";
  constructor(
    public modalService: ModalService,
    private timeService: TimeKeepingService
  ) {}

  ngOnInit() {
    this.timeService
      .getDetailTimeKeeping(this.currentMonth, this.currentYear)
      .subscribe((res) => {
        this.timeKeepingModal = res;
      });
    this.getTime();
  }
  timeKeeping() {
    this.modalService.TimeKeepingModal();
    setTimeout(() => {
      this.modalService.CloseModal();
    }, 3000);
  }
  async getTime() {
    this.todaysDataTime = formatDate(
      this.today,
      "dd-MM-yyyy hh:mm:ss a",
      "vi-VN",
      "+7"
    );
  }
}
