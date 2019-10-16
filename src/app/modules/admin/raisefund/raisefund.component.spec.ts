import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisefundComponent } from './raisefund.component';

describe('RaisefundComponent', () => {
  let component: RaisefundComponent;
  let fixture: ComponentFixture<RaisefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaisefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
