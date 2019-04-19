import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiSingleComponent } from './noti-single.component';

describe('NotiSingleComponent', () => {
  let component: NotiSingleComponent;
  let fixture: ComponentFixture<NotiSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
