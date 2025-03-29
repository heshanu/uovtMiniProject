import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersDashBoardComponent } from './customers-dash-board.component';

describe('CustomersDashBoardComponent', () => {
  let component: CustomersDashBoardComponent;
  let fixture: ComponentFixture<CustomersDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersDashBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
