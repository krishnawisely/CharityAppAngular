import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfundeddonorsComponent } from './listfundeddonors.component';

describe('ListfundeddonorsComponent', () => {
  let component: ListfundeddonorsComponent;
  let fixture: ComponentFixture<ListfundeddonorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfundeddonorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfundeddonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
