import { Component, OnInit, ViewChild } from "@angular/core";
import { LeaveModel } from "src/app/model/leave/leave.model";
import { LeaveService } from "src/app/service/leave/leave.service";
import { ModalService } from "src/app/shared/service/modal.service";

@Component({
  selector: "app-home-leave",
  templateUrl: "./home-leave.page.html",
  styleUrls: ["./home-leave.page.scss"],
})
export class HomeLeavePage implements OnInit {
  startTime = "Buổi sáng, 07,03,2021";
  endTime = "Buổi chiều, 09,03,2021";
  description: any;
  constructor(
    private leaveService: LeaveService,
    private modalService: ModalService
  ) {}
  ngOnInit() {}

  getlistLeave(LeavecategoryId: number) {
    // this.leaveService.getListLeave(LeavecategoryId);
  }
  sendForm() {
    // this.leaveModel = {
    //   LeavecategoryId: 1,
    //   Description: this.description,
    //   StartTime: this.startTime,
    //   EndTime: this.endTime,
    // };
    // console.log(this.leaveModel);
  }

  leaveModal() {
    this.modalService.LeaveModal();
  }
}
