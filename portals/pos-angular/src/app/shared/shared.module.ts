import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SlideBarComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[FooterComponent,HeaderComponent,SlideBarComponent,NavBarComponent]
})
export class SharedModule { }
