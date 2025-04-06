import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuwaracarComponent } from './nuwaracar.component';

describe('NuwaracarComponent', () => {
  let component: NuwaracarComponent;
  let fixture: ComponentFixture<NuwaracarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuwaracarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuwaracarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
