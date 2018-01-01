import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpanceComponent } from './edit-expance.component';

describe('EditExpanceComponent', () => {
  let component: EditExpanceComponent;
  let fixture: ComponentFixture<EditExpanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExpanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
