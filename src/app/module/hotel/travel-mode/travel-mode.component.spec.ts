import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelModeComponent } from './travel-mode.component';

describe('TravelModeComponent', () => {
  let component: TravelModeComponent;
  let fixture: ComponentFixture<TravelModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
