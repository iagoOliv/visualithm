import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePopUpComponent } from './home-pop-up.component';

describe('HomePopUpComponent', () => {
  let component: HomePopUpComponent;
  let fixture: ComponentFixture<HomePopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePopUpComponent]
    });
    fixture = TestBed.createComponent(HomePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
