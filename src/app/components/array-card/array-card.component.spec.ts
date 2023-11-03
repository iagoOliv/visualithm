import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayCardComponent } from './array-card.component';

describe('ArrayCardComponent', () => {
  let component: ArrayCardComponent;
  let fixture: ComponentFixture<ArrayCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayCardComponent]
    });
    fixture = TestBed.createComponent(ArrayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
