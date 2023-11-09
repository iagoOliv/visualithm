import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BinarySearchService {
  	middleIndexes: number[] = [];

  	constructor() { }

  	binarySearch(array: number[], target: number): number {
		let start = 0;
		let end = array.length - 1;
		let mid;

		while (start <= end) {
			mid = Math.floor((start + end) / 2);
			this.middleIndexes.push(mid)

			if (array[mid] > target) {
				end = mid - 1;
			} else if (array[mid] < target) {
				start = mid + 1;
			} else {
				return mid;
			}
		}
		return -1;
  	}
}
