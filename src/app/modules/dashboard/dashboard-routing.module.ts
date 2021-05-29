import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { PatientComponent } from '../components/patient/patient.component';
import { DashboardComponent } from './dashboard.component';
import { CaisseComponent } from '../components/caisse/caisse.component';

const dashRoutes: Routes = [
  {
    path: '',
    component : DashboardComponent,
    children :[{
      path: 'calendar', component: CalendarComponent
    },
    {
      path: 'patient', component: PatientComponent,

    },
    {
      path: 'caisse', component: CaisseComponent,

    },


    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(dashRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
