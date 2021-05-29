import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';

const defaultRoutes: Routes = [
  {
    path: '',
    component : DefaultComponent,

  },

];

@NgModule({
  imports: [RouterModule.forChild(defaultRoutes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
