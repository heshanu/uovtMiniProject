import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthprovinceComponent } from './northprovince.component';

describe('NorthprovinceComponent', () => {
  let component: NorthprovinceComponent;
  let fixture: ComponentFixture<NorthprovinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NorthprovinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NorthprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
