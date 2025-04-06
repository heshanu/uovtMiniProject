import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikkacarComponent } from './hikkacar.component';

describe('HikkacarComponent', () => {
  let component: HikkacarComponent;
  let fixture: ComponentFixture<HikkacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HikkacarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HikkacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
