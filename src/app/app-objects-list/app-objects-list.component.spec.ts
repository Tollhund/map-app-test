import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppObjectsListComponent } from './app-objects-list.component';

describe('AppObjectsListComponent', () => {
  let component: AppObjectsListComponent;
  let fixture: ComponentFixture<AppObjectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppObjectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppObjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
