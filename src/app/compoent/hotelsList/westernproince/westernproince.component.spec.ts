import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternproinceComponent } from './westernproince.component';

describe('WesternproinceComponent', () => {
  let component: WesternproinceComponent;
  let fixture: ComponentFixture<WesternproinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WesternproinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WesternproinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
