import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessapplicationdetailsComponent } from './businessapplicationdetails.component';

describe('BusinessapplicationdetailsComponent', () => {
  let component: BusinessapplicationdetailsComponent;
  let fixture: ComponentFixture<BusinessapplicationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessapplicationdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessapplicationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
