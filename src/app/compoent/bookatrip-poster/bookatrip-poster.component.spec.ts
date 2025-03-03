import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookatripPosterComponent } from './bookatrip-poster.component';

describe('BookatripPosterComponent', () => {
  let component: BookatripPosterComponent;
  let fixture: ComponentFixture<BookatripPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookatripPosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookatripPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
