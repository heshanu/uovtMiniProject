import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuwaravanComponent } from './nuwaravan.component';

describe('NuwaravanComponent', () => {
  let component: NuwaravanComponent;
  let fixture: ComponentFixture<NuwaravanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuwaravanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuwaravanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
