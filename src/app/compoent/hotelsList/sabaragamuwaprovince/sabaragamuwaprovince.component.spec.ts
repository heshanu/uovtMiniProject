import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabaragamuwaprovinceComponent } from './sabaragamuwaprovince.component';

describe('SabaragamuwaprovinceComponent', () => {
  let component: SabaragamuwaprovinceComponent;
  let fixture: ComponentFixture<SabaragamuwaprovinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SabaragamuwaprovinceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SabaragamuwaprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
