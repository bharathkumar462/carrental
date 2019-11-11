import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedcarsComponent } from './bookedcars.component';

describe('BookedcarsComponent', () => {
  let component: BookedcarsComponent;
  let fixture: ComponentFixture<BookedcarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedcarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
