import { element } from 'protractor';
import { Month } from './../../models/month';
import { Year } from './../../models/year';
import { ExpenceService } from './../../services/expence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expance-list',
  templateUrl: './expance-list.component.html',
  styleUrls: ['./expance-list.component.css']
})
export class ExpanceListComponent implements OnInit {
  expanceList: any[];
  expr: any[];
  years: Year[]= [ ];
  months: string[]= [];
  expyear: any[];
  selectedYear: string;
  selectedMonth: string;
  isYearNotSelected = true;

  constructor(private es: ExpenceService) { }


  ngOnInit() {

    this.es.getYears().subscribe(res => {
      this.expr = res;
      this.getYear();
      console.log(this.expr);
    });

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
    this.expyear = this.expr.filter(function(obj) {
      return obj.$key === year;
    });

    // console.log(seleObj);
    // console.log(Object.keys(seleObj[0]));
    for (let index = 0; index < this.expyear.length; index++) {
      this.months = Object.keys(this.expyear[index]);
    }
  }

  onMonthChange() {
    this.es.getExpenceList(this.selectedYear, this.selectedMonth).subscribe(res => {
      this.expanceList = res;
      // console.log(this.expanceList);
    });
  }

}
