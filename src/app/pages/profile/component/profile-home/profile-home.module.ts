import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ProfileHomePageRoutingModule } from './profile-home-routing.module';

import { ProfileHomePage } from './profile-home.page';
import { SharedModule } from 'src/app/shared/shared.module';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouteReuseStrategy } from '@angular/router';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileHomePageRoutingModule,
    SharedModule,
  ],
  declarations: [ProfileHomePage],
  providers: [  
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
})
export class ProfileHomePageModule {}
