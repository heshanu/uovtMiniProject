import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallevanComponent } from './gallevan.component';

describe('GallevanComponent', () => {
  let component: GallevanComponent;
  let fixture: ComponentFixture<GallevanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GallevanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GallevanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
