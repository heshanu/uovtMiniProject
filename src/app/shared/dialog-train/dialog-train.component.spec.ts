import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTrainComponent } from './dialog-train.component';

describe('DialogTrainComponent', () => {
  let component: DialogTrainComponent;
  let fixture: ComponentFixture<DialogTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogTrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
