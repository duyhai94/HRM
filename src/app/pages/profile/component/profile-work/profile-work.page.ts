import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-work',
  templateUrl: './profile-work.page.html',
  styleUrls: ['./profile-work.page.scss'],
})
export class ProfileWorkPage implements OnInit {
  selected: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showInfo(){
    this.selected = !this.selected;

  }

}
