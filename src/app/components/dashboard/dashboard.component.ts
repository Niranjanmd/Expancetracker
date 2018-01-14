import { Bankservice } from './../../services/bank.service';
import { Component, OnInit } from '@angular/core';
import { ExpenceService } from './../../services/expence.service';
import { Expance } from '../../models/expence';
import { Bank } from '../../models/bank';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  banks: Bank[];
  totalBal: number;
  totalDebt: number;
  expanceList: any[];

  constructor(private bs: Bankservice, private es: ExpenceService, private router: Router) { }

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
      console.log(this.totalDebt);
    });
  }

  getTotalBalance() {
    let total = 0;

    for (let i = 0; i < this.banks.length; i++) {
      if (!isNaN(parseFloat(this.banks[i].balance.toString()))) {
        total += parseFloat(this.banks[i].balance.toString());
      }
      // console.log(this.banks[i].balance);
    }
    this.totalBal = parseFloat(total.toFixed(2));
    // console.log(total);
  }

  PayExpance(exp: Expance) {
    const bank: Bank[] = this.banks.filter(function(item){
      return item.bankName === 'SC';
    });
    console.log(bank);
    if (!exp.isPaid) {
      this.totalBal = this.totalBal - exp.amount;
      bank[0].balance = bank[0].balance - exp.amount;
    }else {
      this.totalBal = this.totalBal + exp.amount;
      bank[0].balance = bank[0].balance + exp.amount;
    }
    exp.isPaid = !exp.isPaid;
    this.es.updateExpance(exp.$key, exp).then(function(){
    });

    this.bs.updateBank(bank[0].$key, bank[0]);
  }


  onBankClick(bank: Bank) {
   console.log(bank.$key);
    this.router.navigate(['/editbank', bank.$key]);
  }
}
