import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { interval, Observable, timer } from "rxjs";
import { map } from "rxjs/operators";
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

  //time today
  public today: number = Date.now();
  constructor(
    public modalService: ModalService,
    private timeService: TimeKeepingService
  ) {}

  ngOnInit() {}
  timeKeeping() {
    this.modalService.TimeKeepingModal();
    setTimeout(() => {
      this.modalService.CloseModal();
    }, 3000);
  }

  public time$: Observable<Date> = timer(0, 1000).pipe(map(() => new Date()));
  white_check_mark;
  eyes;
  raised_hands;
}
