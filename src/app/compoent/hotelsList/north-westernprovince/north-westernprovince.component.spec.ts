import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthWesternprovinceComponent } from './north-westernprovince.component';

describe('NorthWesternprovinceComponent', () => {
  let component: NorthWesternprovinceComponent;
  let fixture: ComponentFixture<NorthWesternprovinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NorthWesternprovinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NorthWesternprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
