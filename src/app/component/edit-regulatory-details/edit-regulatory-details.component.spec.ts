import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegulatoryDetailsComponent } from './edit-regulatory-details.component';

describe('EditRegulatoryDetailsComponent', () => {
  let component: EditRegulatoryDetailsComponent;
  let fixture: ComponentFixture<EditRegulatoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegulatoryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegulatoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
