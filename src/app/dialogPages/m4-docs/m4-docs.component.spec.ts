import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M4DocsComponent } from './m4-docs.component';

describe('M4DocsComponent', () => {
  let component: M4DocsComponent;
  let fixture: ComponentFixture<M4DocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M4DocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M4DocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
