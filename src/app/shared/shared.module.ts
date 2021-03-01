import { LOCALE_ID, NgModule } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { HeaderDetailComponent } from "./header-detail/header-detail.component";
import { IonicModule } from "@ionic/angular";
import { HeaderCardComponent } from "./header-card/header-card.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { FormsModule } from "@angular/forms";
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi);

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderDetailComponent,
    HeaderCardComponent,
    FeedbackComponent,
  ],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [
    HeaderComponent,
    HeaderDetailComponent,
    HeaderCardComponent,
    FeedbackComponent,
  ],
  providers: [{
    provide: LOCALE_ID, useValue:"vi-VN"
  }]
})
export class SharedModule {}
