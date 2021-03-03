import { Component, OnInit, ViewChild } from "@angular/core";
import { LeaveModel } from "src/app/model/leave/leave.model";

@Component({
  selector: "app-home-leave",
  templateUrl: "./home-leave.page.html",
  styleUrls: ["./home-leave.page.scss"],
})
export class HomeLeavePage implements OnInit {
  Description: any;
  leaveModel: LeaveModel;
  constructor() {}
  ngOnInit() {}
}
