import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikkarentbikesComponent } from './hikkarentbikes.component';

describe('HikkarentbikesComponent', () => {
  let component: HikkarentbikesComponent;
  let fixture: ComponentFixture<HikkarentbikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HikkarentbikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HikkarentbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
