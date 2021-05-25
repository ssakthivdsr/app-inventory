import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusinessApplicationDetailsComponent } from './edit-business-application-details.component';

describe('EditBusinessApplicationDetailsComponent', () => {
  let component: EditBusinessApplicationDetailsComponent;
  let fixture: ComponentFixture<EditBusinessApplicationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBusinessApplicationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBusinessApplicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
