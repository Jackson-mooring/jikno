import { TestBed } from '@angular/core/testing';

import { SubDataService } from './sub-data.service';

describe('SubDataService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: SubDataService = TestBed.get(SubDataService);
		expect(service).toBeTruthy();
	});
});
