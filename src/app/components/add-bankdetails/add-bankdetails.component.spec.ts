import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankdetailsComponent } from './add-bankdetails.component';

describe('AddBankdetailsComponent', () => {
  let component: AddBankdetailsComponent;
  let fixture: ComponentFixture<AddBankdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBankdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
