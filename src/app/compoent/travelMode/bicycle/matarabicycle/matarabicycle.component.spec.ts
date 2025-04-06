import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatarabicycleComponent } from './matarabicycle.component';

describe('MatarabicycleComponent', () => {
  let component: MatarabicycleComponent;
  let fixture: ComponentFixture<MatarabicycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatarabicycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatarabicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
