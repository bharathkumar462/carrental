import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickuppointComponent } from './pickuppoint.component';

describe('PickuppointComponent', () => {
  let component: PickuppointComponent;
  let fixture: ComponentFixture<PickuppointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickuppointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickuppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
