import { Component, OnInit, ViewChild } from "@angular/core";
import { LeaveModel } from "src/app/model/leave/leave.model";

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
  constructor() {}
  ngOnInit() {
    console.log(this.sendForm());
  }

  sendForm() {
    this.leaveModel.Description = this.description;
    this.leaveModel.StartTime = this.startDate;
    this.leaveModel.EndTime = this.endDate;
  }
}
