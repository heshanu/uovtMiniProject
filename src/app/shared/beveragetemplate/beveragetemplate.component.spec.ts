import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragetemplateComponent } from './beveragetemplate.component';

describe('BeveragetemplateComponent', () => {
  let component: BeveragetemplateComponent;
  let fixture: ComponentFixture<BeveragetemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeveragetemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeveragetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
