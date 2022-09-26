import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SlideBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[FooterComponent,HeaderComponent,SlideBarComponent]
})
export class SharedModule { }
