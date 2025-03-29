import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatararentbikesComponent } from './matararentbikes.component';

describe('MatararentbikesComponent', () => {
  let component: MatararentbikesComponent;
  let fixture: ComponentFixture<MatararentbikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatararentbikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatararentbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
