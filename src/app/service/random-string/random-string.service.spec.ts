import { TestBed } from '@angular/core/testing';

import { RandomStringService } from './random-string.service';

describe('RandomStringService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: RandomStringService = TestBed.get(RandomStringService);
		expect(service).toBeTruthy();
	});
});
