import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsOverlayComponent } from './apps-overlay.component';

describe('AppsOverlayComponent', () => {
	let component: AppsOverlayComponent;
	let fixture: ComponentFixture<AppsOverlayComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppsOverlayComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppsOverlayComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
