import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessPartnerDetailsComponent } from './edit-business-partner-details.component';

describe('EditBusinessPartnerDetailsComponent', () => {
  let component: EditBusinessPartnerDetailsComponent;
  let fixture: ComponentFixture<EditBusinessPartnerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBusinessPartnerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBusinessPartnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
