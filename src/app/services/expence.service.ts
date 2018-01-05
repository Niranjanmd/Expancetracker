
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { Expance } from '../models/expence';


@Injectable()
export class ExpenceService {
  expenceList: FirebaseListObservable<any[]>;
  years: FirebaseListObservable<any[]>;

  constructor( private fb: AngularFireDatabase) { }

  getExpenceList(year: string, month: string) {
    this.expenceList = this.fb.list('/expences/' + year + '/' + month) as FirebaseListObservable<Expance[]>;
    return this.expenceList;
  }

  getYears() {
    this.years = this.fb.list('/expences') as FirebaseListObservable<Expance[]>;
    return this.years;
  }
}
