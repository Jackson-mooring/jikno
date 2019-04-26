import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickScrollBarComponent } from './stick-scroll-bar.component';

describe('StickScrollBarComponent', () => {
  let component: StickScrollBarComponent;
  let fixture: ComponentFixture<StickScrollBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickScrollBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickScrollBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
