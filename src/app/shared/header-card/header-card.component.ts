import { Component, OnInit } from '@angular/core';
import { ProfileModel } from 'src/app/model/profile/profile.model';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss'],
})
export class HeaderCardComponent implements OnInit {
  profileUser = new ProfileModel();
  constructor(
    private profileService: ProfileService
  ) {}

  ngOnInit() {}
  detailProfile() {
    this.profileService.getDetailProfile().subscribe((res)=> {
      this.profileUser = res;
    })
  }
}
