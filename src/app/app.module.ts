import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ExpanceListComponent } from './components/expance-list/expance-list.component';
import { AddExpanceComponent } from './components/add-expance/add-expance.component';
import { EditExpanceComponent } from './components/edit-expance/edit-expance.component';
import { IncomeListComponent } from './components/income-list/income-list.component';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { BankaccountListComponent } from './components/bankaccount-list/bankaccount-list.component';
import { AddBankdetailsComponent } from './components/add-bankdetails/add-bankdetails.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ExpanceListComponent,
    AddExpanceComponent,
    EditExpanceComponent,
    IncomeListComponent,
    AddIncomeComponent,
    BankaccountListComponent,
    AddBankdetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
