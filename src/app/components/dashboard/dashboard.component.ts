import { Bankservice } from './../../services/bank.service';
import { Component, OnInit } from '@angular/core';
import { ExpenceService } from './../../services/expence.service';
import { Expance } from '../../models/expence';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  banks: any[];
  totalBal: number;
  totalDebt: number;
  expanceList: any[];

  constructor(private bs: Bankservice, private es: ExpenceService) { }

  ngOnInit() {
    this.bs.getBankList().subscribe(res => {
      this.banks = res;
      this.getTotalBalance();
    });

    this.getCurrentMonthTotalExp();
  }
  getCurrentMonthTotalExp() {
    const d = new Date();
    const m = d.getMonth() + 1;
    const y = d.getFullYear();
    console.log(m + ' ' + y);

    this.es.getExpenceList( y.toString() , m.toString()).subscribe(res => {
      let total = 0;
      this.expanceList = res;
      res.forEach(function(item){
        if (!item.isPaid) {
          total += item.amount;
        }
      });
      this.totalDebt = total;
      // console.log(this.totalDebt);
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
    // console.log(total);
  }

  PayExpance(exp: Expance) {
    if (!exp.isPaid) {
      this.totalBal = this.totalBal - exp.amount;
    }else {
      this.totalBal = this.totalBal + exp.amount;
    }
    exp.isPaid = !exp.isPaid;
    this.es.updateExpance(exp.$key, exp).then(function(){
    });
  }
}
