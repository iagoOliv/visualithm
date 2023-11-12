import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundEffectComponent } from './sound-effect.component';

describe('SoundEffectComponent', () => {
  let component: SoundEffectComponent;
  let fixture: ComponentFixture<SoundEffectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoundEffectComponent]
    });
    fixture = TestBed.createComponent(SoundEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
