import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderDetailComponent } from './header-detail/header-detail.component';
import { IonicModule } from '@ionic/angular';
import { HeaderCardComponent } from './header-card/header-card.component';



@NgModule({
  declarations: [
     HeaderComponent,
     HeaderDetailComponent,
     HeaderCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
   
  ],
  exports: [
    HeaderComponent,
    HeaderDetailComponent,
    HeaderCardComponent,
  ],
})
export class SharedModule { }
