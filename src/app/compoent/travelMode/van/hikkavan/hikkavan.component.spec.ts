import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikkavanComponent } from './hikkavan.component';

describe('HikkavanComponent', () => {
  let component: HikkavanComponent;
  let fixture: ComponentFixture<HikkavanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HikkavanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HikkavanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
