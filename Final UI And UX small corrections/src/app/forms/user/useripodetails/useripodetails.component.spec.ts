import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseripodetailsComponent } from './useripodetails.component';

describe('UseripodetailsComponent', () => {
  let component: UseripodetailsComponent;
  let fixture: ComponentFixture<UseripodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseripodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseripodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
