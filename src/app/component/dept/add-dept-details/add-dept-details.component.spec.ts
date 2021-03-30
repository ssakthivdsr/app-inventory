import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeptDetailsComponent } from './add-dept-details.component';

describe('AddDeptDetailsComponent', () => {
  let component: AddDeptDetailsComponent;
  let fixture: ComponentFixture<AddDeptDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeptDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
