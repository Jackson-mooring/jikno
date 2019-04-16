import { TestBed } from '@angular/core/testing';

import { TouchscreenService } from './touchscreen.service';

describe('TouchscreenService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: TouchscreenService = TestBed.get(TouchscreenService);
		expect(service).toBeTruthy();
	});
});
