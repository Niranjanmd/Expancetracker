import { ExpenceService } from './../../services/expence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expance-list',
  templateUrl: './expance-list.component.html',
  styleUrls: ['./expance-list.component.css']
})
export class ExpanceListComponent implements OnInit {
  expanceList: any[];
  constructor(private es: ExpenceService) { }

  ngOnInit() {
    this.es.getExpenceList('jan').subscribe(res => {
      this.expanceList = res;
      console.log(this.expanceList);
    });
  }

}
