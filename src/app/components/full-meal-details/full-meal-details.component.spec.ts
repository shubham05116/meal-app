import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMealDetailsComponent } from './full-meal-details.component';

describe('FullMealDetailsComponent', () => {
  let component: FullMealDetailsComponent;
  let fixture: ComponentFixture<FullMealDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullMealDetailsComponent]
    });
    fixture = TestBed.createComponent(FullMealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
