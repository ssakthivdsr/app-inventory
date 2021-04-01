import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorpackageComponent } from './vendorpackage.component';

describe('VendorpackageComponent', () => {
  let component: VendorpackageComponent;
  let fixture: ComponentFixture<VendorpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorpackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
