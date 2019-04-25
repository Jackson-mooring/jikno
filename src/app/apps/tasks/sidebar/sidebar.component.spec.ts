import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: TasksSidebarComponent;
  let fixture: ComponentFixture<TasksSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
