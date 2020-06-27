import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MomentJsComponent } from './moment-js/moment-js.component'
import { DoctorAvailableTimeComponent } from './doctor-available-time/doctor-available-time.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, MomentJsComponent, DoctorAvailableTimeComponent]
})
export class HomePageModule {}
