import { TestBed } from '@angular/core/testing';

import { ChangeValuesService } from './change-values.service';

describe('ChangeValuesService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: ChangeValuesService = TestBed.get(ChangeValuesService);
		expect(service).toBeTruthy();
	});
});
