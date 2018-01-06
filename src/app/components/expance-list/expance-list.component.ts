import { element } from 'protractor';
import { Month } from './../../models/month';
import { Year } from './../../models/year';
import { ExpenceService } from './../../services/expence.service';
import { Component, OnInit } from '@angular/core';

const months: Month[] = [
  { id: '1', value: 'Jan' },
  { id: '2', value: 'Feb' },
  { id: '3', value: 'Mar' },
  { id: '4', value: 'Apr' },
  { id: '5', value: 'May' },
  { id: '6', value: 'Jun' },
  { id: '7', value: 'Jul' },
  { id: '8', value: 'Aug' },
  { id: '9', value: 'Sep' },
  { id: '10', value: 'Oct' },
  { id: '11', value: 'Nov' },
  { id: '12', value: 'Dec' },
];

@Component({
  selector: 'app-expance-list',
  templateUrl: './expance-list.component.html',
  styleUrls: ['./expance-list.component.css']
})


export class ExpanceListComponent implements OnInit {
  expanceList: any[];
  expr: any[];
  years: Year[]= [ ];
  // months: string[]= [];

  selectedYear= '0';
  selectedMonth= '0';
  isYearNotSelected = false;
  months: Month[] = months;
  date = new Date;

  constructor(private es: ExpenceService) {
    this.selectedYear = this.date.getFullYear().toString();
    this.selectedMonth = (this.date.getMonth() + 1).toString();
   }


  ngOnInit() {

    this.es.getYears().subscribe(res => {
      this.expr = res;
      this.getYear();
    });

    this.getExpenceList(this.selectedYear, this.selectedMonth);
  }


  getYear() {
    for (let index = 0; index < this.expr.length; index++) {
      this.years.push({ id: this.expr[index].$key, value: this.expr[index].$key });
    }
  }

  onYearChange() {
    if (this.selectedYear === '') {
      this.isYearNotSelected = true;
    }else {
      this.isYearNotSelected = false;
    }
    console.log(this.selectedYear);
    // console.log(this.expr);
    const year = this.selectedYear;
    // let seleObj: any[] ;
    // this.expyear = this.expr.filter(function(obj) {
    //   return obj.$key === year;
    // });

    // console.log(seleObj);
    // console.log(Object.keys(seleObj[0]));
    // for (let index = 0; index < this.expyear.length; index++) {
    //   this.months = Object.keys(this.expyear[index]);
    // }
  }

  onMonthChange() {
    this.getExpenceList(this.selectedYear, this.selectedMonth);
  }


  getExpenceList(year: string, month: string){
    this.es.getExpenceList(this.selectedYear, this.selectedMonth).subscribe(res => {
      this.expanceList = res;
      // console.log(this.expanceList);
    });
  }

}
