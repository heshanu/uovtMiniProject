import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalletuktukComponent } from './galletuktuk.component';

describe('GalletuktukComponent', () => {
  let component: GalletuktukComponent;
  let fixture: ComponentFixture<GalletuktukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalletuktukComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalletuktukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
