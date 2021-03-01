import { Component, OnInit } from "@angular/core";
import { ProfileModel } from "src/app/model/profile/profile.model";
import { WorkModel } from "src/app/model/work/work.model";
import { ProfileService } from "src/app/service/profile/profile.service";
import { WorkService } from "src/app/service/work/work.service";

@Component({
  selector: "app-header-card",
  templateUrl: "./header-card.component.html",
  styleUrls: ["./header-card.component.scss"],
})
export class HeaderCardComponent implements OnInit {
  profileUser: ProfileModel;
  workModel: WorkModel;
  constructor(
    private profileService: ProfileService,
    public workService: WorkService
  ) {}

  ngOnInit() {
    this.detailProfile();
  }
  detailProfile() {
    this.profileService.getDetailProfile().subscribe((res) => {
      this.profileUser = res;
    });
    this.workService.getInfoWork().subscribe((res) => {
      this.workModel = res;
    });
  }
}
