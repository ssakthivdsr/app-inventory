import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicationLifecycleDetailsComponent } from './add-application-lifecycle-details.component';

describe('AddApplicationLifecycleDetailsComponent', () => {
  let component: AddApplicationLifecycleDetailsComponent;
  let fixture: ComponentFixture<AddApplicationLifecycleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApplicationLifecycleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApplicationLifecycleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
