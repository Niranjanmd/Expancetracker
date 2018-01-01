import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanceListComponent } from './expance-list.component';

describe('ExpanceListComponent', () => {
  let component: ExpanceListComponent;
  let fixture: ComponentFixture<ExpanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
