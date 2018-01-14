import { Month } from './../../models/month';
import { Year } from './../../models/year';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


const months: Month[] = [
  { id: '1', value: 'Jan' },
  { id: '2', value: 'Feb' },
  { id: '3', value: 'Mar' },
  { id: '4', value: 'Apr' },
  { id: '5', value: 'May' },
  { id: '6', value: 'Jun' },
  { id: '7', value: 'Jul' },
  { id: '8', value: 'Aug' },
  { id: '9', value: 'Sep' },
  { id: '10', value: 'Oct' },
  { id: '11', value: 'Nov' },
  { id: '12', value: 'Dec' },
];
@Component({
  selector: 'app-add-expance',
  templateUrl: './add-expance.component.html',
  styleUrls: ['./add-expance.component.css']
})
export class AddExpanceComponent implements OnInit {
  year: Year[] = [];
  rForm: FormGroup;
  constructor(private fb: FormBuilder) {
   const date = new Date;
    const y = date.getFullYear();
    console.log(y);
    for (let index = y - 1; index <= y + 2; index++) {
      console.log(index);
      this.year.push({ id: index.toString(), value: index.toString() });
    }
  }

  ngOnInit() {
    // this.rForm = this.fb.group({
    // });
  }

}
