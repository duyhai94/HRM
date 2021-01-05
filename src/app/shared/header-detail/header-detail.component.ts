import { Component, Input, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-header-detail',
  templateUrl: './header-detail.component.html',
  styleUrls: ['./header-detail.component.scss'],
})
export class HeaderDetailComponent implements OnInit {
  @Input() headerTitle;
  constructor(private routerOutlet: IonRouterOutlet) { }

  ngOnInit() {
    // this.routerOutlet.b
  }

}
