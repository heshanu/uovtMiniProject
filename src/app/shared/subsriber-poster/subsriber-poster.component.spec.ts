import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsriberPosterComponent } from './subsriber-poster.component';

describe('SubsriberPosterComponent', () => {
  let component: SubsriberPosterComponent;
  let fixture: ComponentFixture<SubsriberPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubsriberPosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubsriberPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
