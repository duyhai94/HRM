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

registerLocaleData(localeVi);

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderDetailComponent,
    HeaderCardComponent,
    FeedbackComponent,
    SalaryDetailPage,
  ],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    HeaderDetailComponent,
    HeaderCardComponent,
    FeedbackComponent,
    SalaryDetailPage,
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
