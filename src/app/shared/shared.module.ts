import { LOCALE_ID, NgModule } from "@angular/core";
import { CommonModule, DatePipe, registerLocaleData } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { HeaderDetailComponent } from "./header-detail/header-detail.component";
import { IonicModule } from "@ionic/angular";
import { HeaderCardComponent } from "./header-card/header-card.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import localeVi from "@angular/common/locales/vi";
import { SalaryDetailPage } from "../pages/wages/component/salary-detail/salary-detail.page";
import { NgCalendarModule } from "ionic2-calendar";
import { ModalLeaveComponent } from "./modal-leave/modal-leave.component";
import { HomeLeavePageModule } from "../pages/home/pages/home-leave/home-leave.module";

registerLocaleData(localeVi);

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderDetailComponent,
    HeaderCardComponent,
    FeedbackComponent,
    SalaryDetailPage,
    ModalLeaveComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgCalendarModule,
  ],
  exports: [
    NgCalendarModule,
    HeaderComponent,
    HeaderDetailComponent,
    HeaderCardComponent,
    FeedbackComponent,
    SalaryDetailPage,
    ModalLeaveComponent,
  ],
  providers: [
    DatePipe,
    {
      provide: LOCALE_ID,
      useValue: "vi-VN",
    },
  ],
})
export class SharedModule {}
