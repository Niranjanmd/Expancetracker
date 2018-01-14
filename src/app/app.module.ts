import { ExpenceService } from './services/expence.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ExpanceListComponent } from './components/expance-list/expance-list.component';
import { AddExpanceComponent } from './components/add-expance/add-expance.component';
import { EditExpanceComponent } from './components/edit-expance/edit-expance.component';
import { IncomeListComponent } from './components/income-list/income-list.component';
import { AddIncomeComponent } from './components/add-income/add-income.component';

import { AddBankdetailsComponent } from './components/add-bankdetails/add-bankdetails.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Bankservice } from './services/bank.service';
import { RouterModule } from '@angular/router';


// ng switch
import { UiSwitchModule } from 'ngx-toggle-switch/src';
import { EditbankComponent } from './components/editbank/editbank.component';

// flash message
import { FlashMessagesModule } from 'ngx-flash-messages';

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
    AddBankdetailsComponent,
    DashboardComponent,
    EditbankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiSwitchModule,
    ReactiveFormsModule,
    FlashMessagesModule ,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot([
      { path: '', component: DashboardComponent},
      { path: 'expences', component: ExpanceListComponent},
      { path: 'addexpence', component: AddExpanceComponent},
      { path: 'editbank/:id', component: EditbankComponent}
    ])
  ],
  providers: [AngularFireDatabase, AngularFireAuth, Bankservice, ExpenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
