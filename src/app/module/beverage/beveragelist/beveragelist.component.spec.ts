import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragelistComponent } from './beveragelist.component';

describe('BeveragelistComponent', () => {
  let component: BeveragelistComponent;
  let fixture: ComponentFixture<BeveragelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeveragelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeveragelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
