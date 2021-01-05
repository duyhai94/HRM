import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderDetailComponent } from './header-detail/header-detail.component';



@NgModule({
  declarations: [
     HeaderComponent,
     HeaderDetailComponent
  ],
  imports: [
    CommonModule,
   
  ],
  exports: [
    HeaderComponent,
    HeaderDetailComponent
  ],
})
export class SharedModule { }
