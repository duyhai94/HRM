import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { WagesHomePageRoutingModule } from "./wages-home-routing.module";

import { WagesHomePage } from "./wages-home.page";
import { SharedModule } from "src/app/shared/shared.module";

import { NgCalendarModule } from "ionic2-calendar";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WagesHomePageRoutingModule,
    SharedModule,
  ],
  declarations: [WagesHomePage],
})
export class WagesHomePageModule {}
