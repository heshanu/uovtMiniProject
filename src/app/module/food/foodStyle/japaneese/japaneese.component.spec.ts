import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaneeseComponent } from './japaneese.component';

describe('JapaneeseComponent', () => {
  let component: JapaneeseComponent;
  let fixture: ComponentFixture<JapaneeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JapaneeseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JapaneeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
