import { Component, OnInit } from "@angular/core";
import { ProfileModel } from "src/app/model/profile/profile.model";
import { WorkModel } from "src/app/model/work/work.model";
import { ProfileService } from "src/app/service/profile/profile.service";
import { WorkService } from "src/app/service/work/work.service";

@Component({
  selector: "app-profile-detail",
  templateUrl: "./profile-detail.page.html",
  styleUrls: ["./profile-detail.page.scss"],
})
export class ProfileDetailPage implements OnInit {
  selected: number;
  profileModer: ProfileModel;
  workModel: WorkModel;

  constructor(
    public profileService: ProfileService,
    public workService: WorkService
  ) {}

  ngOnInit() {}

  showInfo(event: number) {
    this.selected = event;
  }
}
