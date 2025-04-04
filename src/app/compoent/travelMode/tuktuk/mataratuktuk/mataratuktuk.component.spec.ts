import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MataratuktukComponent } from './mataratuktuk.component';

describe('MataratuktukComponent', () => {
  let component: MataratuktukComponent;
  let fixture: ComponentFixture<MataratuktukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MataratuktukComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MataratuktukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
