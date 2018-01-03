import { Bankservice } from './../../services/bank.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  banks: any[];
  constructor(private bs: Bankservice) { }

  ngOnInit() {
    this.bs.getBankList().subscribe(res => {
      this.banks = res;
      console.log(this.banks);
    });
  }

  

}
