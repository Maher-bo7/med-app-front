import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/design-material/material/material.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,

    MaterialModule,
    ReactiveFormsModule,

  ]
})
export class LoginModule { }
