import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSriLankaComponent } from './map-sri-lanka.component';

describe('MapSriLankaComponent', () => {
  let component: MapSriLankaComponent;
  let fixture: ComponentFixture<MapSriLankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapSriLankaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapSriLankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
