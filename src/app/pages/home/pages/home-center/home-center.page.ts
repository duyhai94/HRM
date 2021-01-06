import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/service/alert.service';

@Component({
  selector: 'app-home-center',
  templateUrl: './home-center.page.html',
  styleUrls: ['./home-center.page.scss'],
})
export class HomeCenterPage implements OnInit {

  constructor( public alertService :AlertService) { }

  ngOnInit() {
  }
  timeKeeping() {
    this.alertService.TimeKeeping();
  }
}
