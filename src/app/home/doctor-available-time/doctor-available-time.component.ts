import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-available-time',
  templateUrl: './doctor-available-time.component.html',
  styleUrls: ['./doctor-available-time.component.scss'],
})
export class DoctorAvailableTimeComponent implements OnInit {
  date = new Date();
  apptDate = [
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun', isSelected: true },
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun', isSelected: false },
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun', isSelected: false },
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun', isSelected: false },
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun', isSelected: false },
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun', isSelected: false },
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun', isSelected: false }
  ]
  slotTimes;
  previousApptDate = this.apptDate[0];
  monthDate;
  // monthDate = this.apptDate[0].monthWord + ', ' + this.apptDate[0].year;
  constructor() {
    this.slotTimes = [
      {  slot: [ { time :'10AM-12PM', isSelected: false }]
      },
      {
        slot:[ { time :'12PM-2PM', isSelected: false },
        { time :'2PM-4PM', isSelected: false }]
      },
      {
        slot: [{ time : '4PM-6PM', isSelected: false }, { time : '6PM-8PM', isSelected: false }]
      }
    ];
  }

  ngOnInit() {
    this.appointment();
    this.monthDate = this.apptDate[0].monthWord + ', ' + this.apptDate[0].year;
  }

  option(slot) {
    slot.isSelected = !slot.isSelected;
  }

  appointment() {
    this.apptDate.forEach( (data, index) => {
      var currentDate = new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDate()+index);
      data.fullDate = currentDate;
      data.date = currentDate.getDate();
      data.day = currentDate.getDay();
      data.year = currentDate.getFullYear();
      data.month = currentDate.getMonth();
      if(data.day === 0) {
        data.dayWord = 'Sun';
      } else if(data.day === 1) {
        data.dayWord = 'Mon';
      } else if(data.day === 2) {
        data.dayWord = 'Tue';
      } else if(data.day === 3) {
        data.dayWord = 'Wed';
      } else if(data.day === 4) {
        data.dayWord = 'Thu';
      } else if(data.day === 5) {
        data.dayWord = 'Fri';
      } else if(data.day === 6) {
        data.dayWord = 'Sat';
      }

      if(data.month === 0) {
        data.monthWord = 'Jan';
      } else if(data.month === 1) {
        data.monthWord = 'Feb';
      } else if(data.month === 2) {
        data.monthWord = 'Mar';
      } else if(data.month === 3) {
        data.monthWord = 'Apr';
      } else if(data.month === 4) {
        data.monthWord = 'May';
      } else if(data.month === 5) {
        data.monthWord = 'June';
      } else if(data.month === 6) {
        data.monthWord = 'July';
      } else if(data.month === 7) {
        data.monthWord = 'Aug';
      } else if(data.month === 8) {
        data.monthWord = 'Sep';
      } else if(data.month === 9) {
        data.monthWord = 'Oct';
      } else if(data.month === 10) {
        data.monthWord = 'Nov';
      } else if(data.month === 11) {
        data.monthWord = 'Dec';
      }
    });
    console.log(this.apptDate);
  }

  whichDate(apptDate) {
    if(this.previousApptDate !== apptDate) {
      apptDate.isSelected = true;
      this.previousApptDate.isSelected = false;
      this.previousApptDate = apptDate;
      this.monthDate = apptDate.monthWord + ', ' + apptDate.year
    }
  }

}
