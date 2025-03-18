import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchImagePosterComponent } from './search-image-poster.component';

describe('SearchImagePosterComponent', () => {
  let component: SearchImagePosterComponent;
  let fixture: ComponentFixture<SearchImagePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchImagePosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchImagePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
