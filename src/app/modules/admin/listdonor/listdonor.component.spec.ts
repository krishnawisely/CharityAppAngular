import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdonorComponent } from './listdonor.component';

describe('ListdonorComponent', () => {
  let component: ListdonorComponent;
  let fixture: ComponentFixture<ListdonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
