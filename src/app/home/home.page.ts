import { Component } from '@angular/core';
import * as moment from 'moment';
import { WeekDay } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  date = new Date();
  daily;
  apptDate = [
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun' },
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun' },
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun' },
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun' },
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun' },
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun' },
    { fullDate: new Date(), year: this.date.getFullYear(), date: this.date.getDate(), month: this.date.getMonth(), monthWord: 'Jan', day: this.date.getDay(), dayWord: 'Sun' }
  ]
  slotTimes;
  
  constructor(public router: Router) {
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
    // this.dataMethod(); 
    this.dataMethod1();
  }

  option(slot) {
    slot.isSelected = !slot.isSelected;
  }

  dataMethod1() {
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
      // this.date.setDate(this.date.getDate()+1);
    });
    console.log(this.apptDate);

    this.daily = [{ weekday: 'Monday', slotTimes : [
      {  slot: [ { time :'10AM-12PM', isSelected: false }]
      },
      {
        slot:[ { time :'12PM-2PM', isSelected: false },
        { time :'2PM-4PM', isSelected: false }]
      },
      {
        slot: [{ time : '4PM-6PM', isSelected: false }, { time : '6PM-8PM', isSelected: false }]
      }
    ]},
     { weekday: 'Tuesday', slotTimes : [
      {  slot: [ { time :'10AM-12PM', isSelected: false }]
      },
      {
        slot:[ { time :'12PM-2PM', isSelected: false },
        { time :'2PM-4PM', isSelected: false }]
      },
      {
        slot: [{ time : '4PM-6PM', isSelected: false }, { time : '6PM-8PM', isSelected: false }]
      }
    ] }, 
     { weekday: 'Wednesday', slotTimes : [
      {  slot: [ { time :'10AM-12PM', isSelected: false }]
      },
      {
        slot:[ { time :'12PM-2PM', isSelected: false },
        { time :'2PM-4PM', isSelected: false }]
      },
      {
        slot: [{ time : '4PM-6PM', isSelected: false }, { time : '6PM-8PM', isSelected: false }]
      }
    ] }, 
     { weekday: 'Thursday' , slotTimes : [
      {  slot: [ { time :'10AM-12PM', isSelected: false }]
      },
      {
        slot:[ { time :'12PM-2PM', isSelected: false },
        { time :'2PM-4PM', isSelected: false }]
      },
      {
        slot: [{ time : '4PM-6PM', isSelected: false }, { time : '6PM-8PM', isSelected: false }]
      }
    ]}, 
     { weekday: 'Friday' , slotTimes : [
      {  slot: [ { time :'10AM-12PM', isSelected: false }]
      },
      {
        slot:[ { time :'12PM-2PM', isSelected: false },
        { time :'2PM-4PM', isSelected: false }]
      },
      {
        slot: [{ time : '4PM-6PM', isSelected: false }, { time : '6PM-8PM', isSelected: false }]
      }
    ]},
     { weekday: 'Saturday', slotTimes : [
      {  slot: [ { time :'10AM-12PM', isSelected: false }]
      },
      {
        slot:[ { time :'12PM-2PM', isSelected: false },
        { time :'2PM-4PM', isSelected: false }]
      },
      {
        slot: [{ time : '4PM-6PM', isSelected: false }, { time : '6PM-8PM', isSelected: false }]
      }
    ] },
     { weekday: 'Sunday', slotTimes : [
      {  slot: [ { time :'10AM-12PM', isSelected: false }]
      },
      {
        slot:[ { time :'12PM-2PM', isSelected: false },
        { time :'2PM-4PM', isSelected: false }]
      },
      {
        slot: [{ time : '4PM-6PM', isSelected: false }, { time : '6PM-8PM', isSelected: false }]
      }
    ]}];
  }

  momentJS() {
    this.router.navigate(['moment']);
  }


  dataMethod() {
    let date = new Date();
    console.log('date', date);
    date.setDate(date.getDate()+1);
    let createDate = new Date('2020-10-21');
    console.log('date', date);
    console.log('string', date.toString());
    console.log('dateString', date.toDateString());
    console.log('timeString', date.toTimeString());
    console.log('fullYear', date.getFullYear());
    console.log('month', date.getMonth());  // month start with 0th index
    console.log('date', date.getDate());
    console.log('day', date.getDay());
    console.log('hours', date.getHours());
    console.log('minutes', date.getMinutes());
    console.log('seconds', date.getSeconds());
    console.log('json', date.toJSON());
    console.log('localString', date.toLocaleString());
    console.log('localeDateString', date.toLocaleDateString());
    console.log('localeTimeString', date.toLocaleTimeString());

    console.log('valueOf', date.valueOf());
    console.log('time', date.getTime());
    console.log('timeZone', date.getTimezoneOffset());
    console.log('ISOstring', date.toISOString());

    let monthDate = date;
    monthDate.setMonth(0);
    console.log('set month to jan', monthDate.toString());
    console.log('month start with 0th index', monthDate.getMonth());
  }

}

