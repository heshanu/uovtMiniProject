import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MataracarComponent } from './mataracar.component';

describe('MataracarComponent', () => {
  let component: MataracarComponent;
  let fixture: ComponentFixture<MataracarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MataracarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MataracarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
