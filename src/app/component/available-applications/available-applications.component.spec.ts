import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableApplicationsComponent } from './available-applications.component';

describe('AvailableApplicationsComponent', () => {
  let component: AvailableApplicationsComponent;
  let fixture: ComponentFixture<AvailableApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
