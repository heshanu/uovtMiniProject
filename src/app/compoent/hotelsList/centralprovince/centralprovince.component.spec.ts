import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralprovinceComponent } from './centralprovince.component';

describe('CentralprovinceComponent', () => {
  let component: CentralprovinceComponent;
  let fixture: ComponentFixture<CentralprovinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentralprovinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentralprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
