import { Bank } from './../models/bank';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Injectable()
export class Bankservice {
  bankList: FirebaseListObservable<any[]>;
  bank: FirebaseObjectObservable<any[]>;
  constructor( private af: AngularFireDatabase) {
    this.bankList = this.af.list('/bank') as FirebaseListObservable<Bank[]>;
  }

  getBankList() {
    return this.bankList;
  }

}
