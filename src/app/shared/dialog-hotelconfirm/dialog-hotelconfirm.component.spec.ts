import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHotelconfirmComponent } from './dialog-hotelconfirm.component';

describe('DialogHotelconfirmComponent', () => {
  let component: DialogHotelconfirmComponent;
  let fixture: ComponentFixture<DialogHotelconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogHotelconfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogHotelconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
