import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-moment-js',
  templateUrl: './moment-js.component.html',
  styleUrls: ['./moment-js.component.scss'],
})
export class MomentJsComponent implements OnInit {
  
  public date = new Date();
  public moment;
  constructor(private toaster: ToastController) { 
    console.log(this.date);
  }

  ngOnInit() {
    this.momentJS();
  }

  momentJS() {
    this.moment = moment(this.date);

    console.log(this.moment);
    console.log(this.moment.format());

    /* we can format as per our recommendation */
    console.log(this.moment.format('MMMM Do YYYY, h:mm:ss a'));
    console.log(this.moment.format('dddd'));
    console.log(this.moment.format('MMM Do YY'));
    console.log(this.moment.format('YYYY [logesh] YYYY'));
    console.log(this.moment.format("DD/MM/YYYY"));
    
    /* See moment._locale._longDateFormat */
    console.log(this.moment.format('LT'));
    console.log(this.moment.format('LTS'));
    console.log(this.moment.format('L'));
    console.log(this.moment.format('l'));

    /* manipulation */

    console.log( 'add 1 day', this.moment.add(1, 'days'));
    console.log( 'substract 1 day', this.moment.add(1, 'days'));
  }

  async success() {
    const toastMessage = await this.toaster.create({
      message: "show toaster message",
      position: 'bottom',
      duration: 5000,
      color: 'success',
      // cssClass: "toaster"
    });
    return toastMessage.present();
  }

}
