import { Component, OnInit, ViewChild } from "@angular/core";
import { LeaveModel } from "src/app/model/leave/leave.model";
import { LeaveService } from "src/app/service/leave/leave.service";

@Component({
  selector: "app-home-leave",
  templateUrl: "./home-leave.page.html",
  styleUrls: ["./home-leave.page.scss"],
})
export class HomeLeavePage implements OnInit {
  description: any;
  leaveModel: LeaveModel;
  startDate: any;
  startTime: any;
  endDate: any;
  endTime: any;
  constructor(private leaveService: LeaveService) {}
  ngOnInit() {}

  getlistLeave(LeavecategoryId: number) {
    this.leaveService.getListLeave(LeavecategoryId);
  }
  sendForm() {
    this.leaveModel = {
      LeavecategoryId: 1,
      Description: this.description,
      StartTime: this.startTime,
      EndTime: this.endTime,
    };
    console.log(this.leaveModel);
  }
  onDateChange(ev) {
    this.startTime = ev.detail.value;
  }
  onEndDateChange(ev) {
    this.endTime = ev.detail.value;
  }
}
