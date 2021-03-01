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
  public today: number = Date.now();
  constructor(
    public modalService: ModalService,
    private timeService: TimeKeepingService
  ) {
    this.startTime();
  }

  ngOnInit() {
    this.timeService
      .getDetailTimeKeeping(this.currentMonth, this.currentYear)
      .subscribe((res) => {
        this.timeKeepingModal = res;
      });
  }
  timeKeeping() {
    this.modalService.TimeKeepingModal();
    setTimeout(() => {
      this.modalService.CloseModal();
    }, 3000);
  }
  startTime() {
    var intervalVar = setInterval(
      function () {
        this.today = new Date().toISOString();
      }.bind(this),
      500
    );
  }
}
