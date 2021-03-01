import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wages-confirm',
  templateUrl: './wages-confirm.page.html',
  styleUrls: ['./wages-confirm.page.scss'],
})
export class WagesConfirmPage implements OnInit {
  selected: boolean = false;
  @Input() data;
  constructor() { }

  ngOnInit() {
  }
  showInfo(){
    this.selected = !this.selected;
  }
}
