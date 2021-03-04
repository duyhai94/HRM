import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomeLeavePageRoutingModule } from "./home-leave-routing.module";

import { HomeLeavePage } from "./home-leave.page";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeLeavePageRoutingModule,
    SharedModule,
  ],
  declarations: [HomeLeavePage],
})
export class HomeLeavePageModule {}
