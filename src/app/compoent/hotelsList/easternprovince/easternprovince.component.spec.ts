import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasternprovinceComponent } from './easternprovince.component';

describe('EasternprovinceComponent', () => {
  let component: EasternprovinceComponent;
  let fixture: ComponentFixture<EasternprovinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EasternprovinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EasternprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
