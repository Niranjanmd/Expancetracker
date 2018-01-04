import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { Expance } from '../models/expence';


@Injectable()
export class ExpenceService {
  expenceList: FirebaseListObservable<any[]>;

  constructor( private fb: AngularFireDatabase) { }

  getExpenceList(month: string) {
    this.expenceList = this.fb.list('/expences/' + month) as FirebaseListObservable<Expance[]>;
    return this.expenceList;
  }
}
