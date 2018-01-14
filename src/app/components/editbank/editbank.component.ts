import { Bankservice } from './../../services/bank.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Bank } from '../../models/bank';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-editbank',
  templateUrl: './editbank.component.html',
  styleUrls: ['./editbank.component.css']
})
export class EditbankComponent implements OnInit, OnDestroy {
  id: string;
  private sub: any;
  bank: Bank;
  constructor(public router: Router,
    public route: ActivatedRoute,
    public bs: Bankservice,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.bs.getBank(this.id).subscribe(res => {
        this.bank = res;
        // console.log(this.bank.accountNumber);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit({ value, valid }: { value: Bank, valid: boolean }) {
    if (valid) {
      this.bs.updateBank(this.id, value);
      this.flashMessagesService.show('Bank Details Updated Successfully!!', {
        classes: ['alert', 'alert-success', 'col-md-5'], // You can pass as many classes as you need
        timeout: 3000, // Default is 3000
      });
    }
  }

}
