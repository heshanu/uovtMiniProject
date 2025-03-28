import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerenttemplateComponent } from './bikerenttemplate.component';

describe('BikerenttemplateComponent', () => {
  let component: BikerenttemplateComponent;
  let fixture: ComponentFixture<BikerenttemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikerenttemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BikerenttemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
