import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstockexchangeComponent } from './viewstockexchange.component';

describe('ViewstockexchangeComponent', () => {
  let component: ViewstockexchangeComponent;
  let fixture: ComponentFixture<ViewstockexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstockexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewstockexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
