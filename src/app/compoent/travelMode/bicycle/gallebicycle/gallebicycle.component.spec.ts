import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallebicycleComponent } from './gallebicycle.component';

describe('GallebicycleComponent', () => {
  let component: GallebicycleComponent;
  let fixture: ComponentFixture<GallebicycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GallebicycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GallebicycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
