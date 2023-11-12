import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomComponent } from './random.component';

describe('RandomComponent', () => {
  let component: RandomComponent;
  let fixture: ComponentFixture<RandomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomComponent]
    });
    fixture = TestBed.createComponent(RandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
