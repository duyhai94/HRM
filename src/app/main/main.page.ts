import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  select:number=1;
  constructor() { }

  ngOnInit() {
  }
  activeNarbar(active){
    this.select = active;
  }
}
