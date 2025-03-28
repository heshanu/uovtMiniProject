import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthCentralprovinceComponent } from './north-centralprovince.component';

describe('NorthCentralprovinceComponent', () => {
  let component: NorthCentralprovinceComponent;
  let fixture: ComponentFixture<NorthCentralprovinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NorthCentralprovinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NorthCentralprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
