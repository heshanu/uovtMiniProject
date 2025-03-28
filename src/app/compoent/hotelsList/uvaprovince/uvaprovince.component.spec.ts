import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvaprovinceComponent } from './uvaprovince.component';

describe('UvaprovinceComponent', () => {
  let component: UvaprovinceComponent;
  let fixture: ComponentFixture<UvaprovinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UvaprovinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UvaprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
