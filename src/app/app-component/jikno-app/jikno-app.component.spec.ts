import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiknoAppComponent } from './jikno-app.component';

describe('JiknoAppComponent', () => {
  let component: JiknoAppComponent;
  let fixture: ComponentFixture<JiknoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiknoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiknoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
