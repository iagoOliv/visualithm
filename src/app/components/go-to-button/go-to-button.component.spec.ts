import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToButtonComponent } from './go-to-button.component';

describe('GoToButtonComponent', () => {
  let component: GoToButtonComponent;
  let fixture: ComponentFixture<GoToButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoToButtonComponent]
    });
    fixture = TestBed.createComponent(GoToButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
