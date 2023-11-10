import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoonLandingComponent } from './soon-landing.component';

describe('SoonLandingComponent', () => {
  let component: SoonLandingComponent;
  let fixture: ComponentFixture<SoonLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoonLandingComponent]
    });
    fixture = TestBed.createComponent(SoonLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
