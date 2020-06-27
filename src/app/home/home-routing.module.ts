import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MomentJsComponent } from './moment-js/moment-js.component';
import { DoctorAvailableTimeComponent } from './doctor-available-time/doctor-available-time.component'

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'moment',
    component: MomentJsComponent
  },
  {
    path: 'doctorAvailableTime',
    component: DoctorAvailableTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
