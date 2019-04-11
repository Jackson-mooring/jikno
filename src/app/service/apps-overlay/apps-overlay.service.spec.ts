import { TestBed } from '@angular/core/testing';

import { AppsOverlayService } from './apps-overlay.service';

describe('AppsOverlayService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: AppsOverlayService = TestBed.get(AppsOverlayService);
		expect(service).toBeTruthy();
	});
});
