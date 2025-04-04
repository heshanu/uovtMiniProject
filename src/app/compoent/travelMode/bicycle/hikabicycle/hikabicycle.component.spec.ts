import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikabicycleComponent } from './hikabicycle.component';

describe('HikabicycleComponent', () => {
  let component: HikabicycleComponent;
  let fixture: ComponentFixture<HikabicycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HikabicycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HikabicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
