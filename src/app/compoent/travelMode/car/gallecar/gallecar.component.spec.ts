import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallecarComponent } from './gallecar.component';

describe('GallecarComponent', () => {
  let component: GallecarComponent;
  let fixture: ComponentFixture<GallecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GallecarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GallecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
