import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableDepartmentsComponent } from './available-departments.component';

describe('AvailableDepartmentsComponent', () => {
  let component: AvailableDepartmentsComponent;
  let fixture: ComponentFixture<AvailableDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableDepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
