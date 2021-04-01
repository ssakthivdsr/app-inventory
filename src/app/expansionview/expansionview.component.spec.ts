import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionviewComponent } from './expansionview.component';

describe('ExpansionviewComponent', () => {
  let component: ExpansionviewComponent;
  let fixture: ComponentFixture<ExpansionviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
