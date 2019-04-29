import { TestBed } from '@angular/core/testing';

import { CheckTypingService } from './check-typing.service';

describe('CheckTypingService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: CheckTypingService = TestBed.get(CheckTypingService);
		expect(service).toBeTruthy();
	});
});
