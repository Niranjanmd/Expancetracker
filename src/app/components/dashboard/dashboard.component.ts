import { Bankservice } from './../../services/bank.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  banks: any[];
  totalBal: number;
  constructor(private bs: Bankservice) { }

  ngOnInit() {
    this.bs.getBankList().subscribe(res => {
      this.banks = res;
      this.getTotalBalance();
    });
  }

  getTotalBalance() {
    let total = 0;

    for (let i = 0; i < this.banks.length; i++) {
      if (!isNaN(parseFloat(this.banks[i].balance))) {
        total += parseFloat(this.banks[i].balance);
      }

    }
    this.totalBal = total;
    console.log(total);
  }
}
