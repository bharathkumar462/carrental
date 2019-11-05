import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcarsComponent } from './bookcars.component';

describe('BookcarsComponent', () => {
  let component: BookcarsComponent;
  let fixture: ComponentFixture<BookcarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookcarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
