import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanColumnComponent } from './loan-column.component';

describe('LoanColumnComponent', () => {
  let component: LoanColumnComponent;
  let fixture: ComponentFixture<LoanColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
