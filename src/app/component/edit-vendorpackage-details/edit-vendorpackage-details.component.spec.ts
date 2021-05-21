import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVendorpackageDetailsComponent } from './edit-vendorpackage-details.component';

describe('EditVendorpackageDetailsComponent', () => {
  let component: EditVendorpackageDetailsComponent;
  let fixture: ComponentFixture<EditVendorpackageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVendorpackageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVendorpackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
