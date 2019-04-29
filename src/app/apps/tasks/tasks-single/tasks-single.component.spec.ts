import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSingleComponent } from './tasks-single.component';

describe('TasksSingleComponent', () => {
  let component: TasksSingleComponent;
  let fixture: ComponentFixture<TasksSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
