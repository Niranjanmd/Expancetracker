import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpanceComponent } from './add-expance.component';

describe('AddExpanceComponent', () => {
  let component: AddExpanceComponent;
  let fixture: ComponentFixture<AddExpanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
