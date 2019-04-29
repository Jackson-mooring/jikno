import { TestBed } from '@angular/core/testing';

import { ValidateValuesService } from './validate-values.service';

describe('ValidateValuesService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: ValidateValuesService = TestBed.get(ValidateValuesService);
		expect(service).toBeTruthy();
	});
});
