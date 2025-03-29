import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelistComponent } from './hotelist.component';

describe('HotelistComponent', () => {
  let component: HotelistComponent;
  let fixture: ComponentFixture<HotelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
