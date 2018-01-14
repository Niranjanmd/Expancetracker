import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { Expance } from '../models/expence';


@Injectable()
export class ExpenceService {
  expenceList: FirebaseListObservable<any[]>;
  years: FirebaseListObservable<any[]>;
  cExpenceList: FirebaseListObservable<any[]>;
  constructor( private fb: AngularFireDatabase) { }

  getExpenceList(year: string, month: string) {
    this.expenceList = this.fb.list('/expences/' + year + '/' + month) as FirebaseListObservable<Expance[]>;
    return this.expenceList;
  }

  getGenericExpenceList() {
    this.cExpenceList = this.fb.list('/generalexpence') as FirebaseListObservable<Expance[]>;
    return this.cExpenceList;
  }

  getYears() {
    this.years = this.fb.list('/expences') as FirebaseListObservable<Expance[]>;
    return this.years;
  }

  updateExpance(id: string, exp: Expance) {
    return this.expenceList.update(id, exp);
  }

  AddGenericExpence(y: string, m: string) {
    this.getGenericExpenceList().subscribe(res => {
      this.fb.object('/expences/' + y + '/' + m).set(res);
    });
  }

}
