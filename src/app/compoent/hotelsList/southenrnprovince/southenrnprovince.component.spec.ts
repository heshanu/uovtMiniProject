import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthenrnprovinceComponent } from './southenrnprovince.component';

describe('SouthenrnprovinceComponent', () => {
  let component: SouthenrnprovinceComponent;
  let fixture: ComponentFixture<SouthenrnprovinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SouthenrnprovinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SouthenrnprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
