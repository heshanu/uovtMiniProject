import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageconfirmComponent } from './beverageconfirm.component';

describe('BeverageconfirmComponent', () => {
  let component: BeverageconfirmComponent;
  let fixture: ComponentFixture<BeverageconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeverageconfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeverageconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
