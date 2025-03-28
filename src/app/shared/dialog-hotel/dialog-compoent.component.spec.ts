import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCompoentComponent } from './dialog-compoent.component';

describe('DialogCompoentComponent', () => {
  let component: DialogCompoentComponent;
  let fixture: ComponentFixture<DialogCompoentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogCompoentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
