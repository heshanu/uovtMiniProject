import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerentbikesComponent } from './gallerentbikes.component';

describe('GallerentbikesComponent', () => {
  let component: GallerentbikesComponent;
  let fixture: ComponentFixture<GallerentbikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GallerentbikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GallerentbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
