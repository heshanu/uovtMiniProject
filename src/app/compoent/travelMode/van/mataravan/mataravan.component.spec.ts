import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MataravanComponent } from './mataravan.component';

describe('MataravanComponent', () => {
  let component: MataravanComponent;
  let fixture: ComponentFixture<MataravanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MataravanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MataravanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
