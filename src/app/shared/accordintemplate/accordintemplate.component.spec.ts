import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordintemplateComponent } from './accordintemplate.component';

describe('AccordintemplateComponent', () => {
  let component: AccordintemplateComponent;
  let fixture: ComponentFixture<AccordintemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordintemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordintemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
