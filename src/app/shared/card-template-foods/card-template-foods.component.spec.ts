import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTemplateFoodsComponent } from './card-template-foods.component';

describe('CardTemplateFoodsComponent', () => {
  let component: CardTemplateFoodsComponent;
  let fixture: ComponentFixture<CardTemplateFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTemplateFoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTemplateFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
