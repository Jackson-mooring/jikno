import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'noSpaces'
})
export class NoSpacesPipe implements PipeTransform {

	transform(value: string, apply: boolean): string {
		if (apply) return value;
	}

}
