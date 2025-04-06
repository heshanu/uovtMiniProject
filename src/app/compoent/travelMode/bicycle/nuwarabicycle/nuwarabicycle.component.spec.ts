import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuwarabicycleComponent } from './nuwarabicycle.component';

describe('NuwarabicycleComponent', () => {
  let component: NuwarabicycleComponent;
  let fixture: ComponentFixture<NuwarabicycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuwarabicycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuwarabicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
