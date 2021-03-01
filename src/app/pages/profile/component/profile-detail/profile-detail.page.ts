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
  //toggle button
  overview: boolean = true;
  contact: boolean = true;
  constructor(
    public profileService: ProfileService,
    public workService: WorkService
  ) {}

  ngOnInit() {
    this.profileService.getDetailProfile().subscribe((res) => {
      this.profileModer = res;
    });

    this.workService.getInfoWork().subscribe((res) => {
      this.workModel = res;
    });
  }

  showOverviewProfile() {
    this.overview = !this.overview;
  }
  showContactProfile() {
    this.contact = !this.contact;
  }
  // showOverviewProfile() {
  //   this.overview = !this.overview;
  // }
  // showOverviewProfile() {
  //   this.overview = !this.overview;
  // }
}
