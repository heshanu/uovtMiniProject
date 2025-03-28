import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicletemplateComponent } from './vehicletemplate.component';

describe('VehicletemplateComponent', () => {
  let component: VehicletemplateComponent;
  let fixture: ComponentFixture<VehicletemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicletemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicletemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
