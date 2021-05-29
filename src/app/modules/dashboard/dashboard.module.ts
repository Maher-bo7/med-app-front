import { ReactiveFormsModule } from '@angular/forms';
import { CaisseComponent } from './../components/caisse/caisse.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../design-material/material/material.module';
import { PatientComponent } from './../components/patient/patient.component';
import { CalendarComponent } from './../components/calendar/calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);





@NgModule({
  declarations: [
    CalendarComponent,
    PatientComponent,
    CaisseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    FullCalendarModule // register FullCalendar with you app

  ]
})
export class DashboardModule { }
