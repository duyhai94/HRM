import { Component, OnInit } from "@angular/core";
import { ProfileModel } from "src/app/model/profile/profile.model";
import { ProfileService } from "src/app/service/profile/profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  profileModel: ProfileModel;
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getDetailProfile().subscribe((res) => {
      this.profileModel = res;
      console.log(res);
    });
  }
}
