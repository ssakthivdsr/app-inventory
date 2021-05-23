import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceManagementDetailsComponent } from './edit-service-management-details.component';

describe('EditServiceManagementDetailsComponent', () => {
  let component: EditServiceManagementDetailsComponent;
  let fixture: ComponentFixture<EditServiceManagementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditServiceManagementDetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceManagementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
