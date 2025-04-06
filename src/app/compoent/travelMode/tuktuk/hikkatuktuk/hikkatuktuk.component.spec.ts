import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikkatuktukComponent } from './hikkatuktuk.component';

describe('HikkatuktukComponent', () => {
  let component: HikkatuktukComponent;
  let fixture: ComponentFixture<HikkatuktukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HikkatuktukComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HikkatuktukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
