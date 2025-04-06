import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthernComponent } from './northern.component';

describe('NorthernComponent', () => {
  let component: NorthernComponent;
  let fixture: ComponentFixture<NorthernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NorthernComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NorthernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
