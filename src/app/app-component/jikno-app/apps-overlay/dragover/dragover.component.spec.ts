import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragoverComponent } from './dragover.component';

describe('DragoverComponent', () => {
	let component: DragoverComponent;
	let fixture: ComponentFixture<DragoverComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DragoverComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DragoverComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
