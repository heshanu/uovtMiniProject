import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuwararentbikesComponent } from './nuwararentbikes.component';

describe('NuwararentbikesComponent', () => {
  let component: NuwararentbikesComponent;
  let fixture: ComponentFixture<NuwararentbikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuwararentbikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuwararentbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
