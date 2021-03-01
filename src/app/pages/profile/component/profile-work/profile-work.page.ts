import { Component, OnInit } from "@angular/core";
import { WorkModel } from "src/app/model/work/work.model";
import { WorkService } from "src/app/service/work/work.service";

@Component({
  selector: "app-profile-work",
  templateUrl: "./profile-work.page.html",
  styleUrls: ["./profile-work.page.scss"],
})
export class ProfileWorkPage implements OnInit {
  selected: boolean = false;
  workModel: WorkModel;
  constructor(private workService: WorkService) {}

  ngOnInit() {
    this.workService.getInfoWork().subscribe((res) => {
      this.workModel = res;
    });
  }

  showInfo() {
    this.selected = !this.selected;
  }
}
