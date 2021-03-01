import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-home',
  templateUrl: './mail-home.page.html',
  styleUrls: ['./mail-home.page.scss'],
})
export class MailHomePage implements OnInit {
  fakeData = [
    {
      Date: new Date(),
      Title: 'Đề xuất quy trình làm việc',
      Content: 'ABC',
      Status: 1
    },
    {
      Date: new Date(),
      Title: 'Đề xuất quy trình làm việc',
      Content: 'ABC',
      Status: 2
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
