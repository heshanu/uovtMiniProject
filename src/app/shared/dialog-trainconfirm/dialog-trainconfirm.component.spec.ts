import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTrainconfirmComponent } from './dialog-trainconfirm.component';

describe('DialogTrainconfirmComponent', () => {
  let component: DialogTrainconfirmComponent;
  let fixture: ComponentFixture<DialogTrainconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogTrainconfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogTrainconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
