import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtemplateComponent } from './foodtemplate.component';

describe('FoodtemplateComponent', () => {
  let component: FoodtemplateComponent;
  let fixture: ComponentFixture<FoodtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodtemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
