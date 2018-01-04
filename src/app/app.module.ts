import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

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

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Bankservice } from './services/bank.service';
import { RouterModule } from '@angular/router';

export const firebaseConfig = {
  apiKey: 'AIzaSyCzj-h4IH9QIP2ugEqAqvYB_hUm6-IASwA',
  authDomain: 'expancetracker.firebaseapp.com',
  databaseURL: 'https://expancetracker.firebaseio.com',
  projectId: 'expancetracker',
  storageBucket: 'expancetracker.appspot.com',
  messagingSenderId: '895554202700'
};


//  const appRoutes: Routes: = [
//   { path:'', component: DashboardComponent},
//   {}
//  ]


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
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot([
      {path: '', component: DashboardComponent},
      { path: 'expences', component: ExpanceListComponent},
    ])
  ],
  providers: [AngularFireDatabase, AngularFireAuth, Bankservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
