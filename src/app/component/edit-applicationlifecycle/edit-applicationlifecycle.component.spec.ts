import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApplicationlifecycleComponent } from './edit-applicationlifecycle.component';

describe('EditApplicationlifecycleComponent', () => {
  let component: EditApplicationlifecycleComponent;
  let fixture: ComponentFixture<EditApplicationlifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditApplicationlifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApplicationlifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
