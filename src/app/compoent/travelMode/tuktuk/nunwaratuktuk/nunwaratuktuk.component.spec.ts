import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NunwaratuktukComponent } from './nunwaratuktuk.component';

describe('NunwaratuktukComponent', () => {
  let component: NunwaratuktukComponent;
  let fixture: ComponentFixture<NunwaratuktukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NunwaratuktukComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NunwaratuktukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
