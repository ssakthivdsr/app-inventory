import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApplicationDetailsComponent } from './edit-application-details.component';

describe('EditApplicationDetailsComponent', () => {
  let component: EditApplicationDetailsComponent;
  let fixture: ComponentFixture<EditApplicationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditApplicationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
