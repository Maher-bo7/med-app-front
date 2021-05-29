import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './authentification/components/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component : DefaultComponent,
    children :[{
      path : 'default',
      children :[{
        path : 'dashboard',
        loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)

      }]

    }]
  },
  {
     path: 'login', component: LoginComponent
   },

    // otherwise redirect to home
    {
      path: '**', redirectTo: 'login'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
