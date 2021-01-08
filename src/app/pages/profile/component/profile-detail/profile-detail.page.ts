import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})
export class ProfileDetailPage implements OnInit {
  selected: number;


  constructor() { }

  ngOnInit() {
  }

  showInfo( event : number){
    this.selected = event;
  
    
    

   
    

  }
}
