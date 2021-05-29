import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MaterialModule } from '../design-material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PanelComponent } from './component/panel/panel.component';




@NgModule({
  declarations: [
     HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PanelComponent
    ,
    ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PanelComponent


  ]

})
export class SharedModule { }
