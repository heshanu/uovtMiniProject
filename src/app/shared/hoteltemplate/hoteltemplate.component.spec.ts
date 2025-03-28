import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteltemplateComponent } from './hoteltemplate.component';

describe('HoteltemplateComponent', () => {
  let component: HoteltemplateComponent;
  let fixture: ComponentFixture<HoteltemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoteltemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoteltemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
