import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BinarySearchService {
  middleIndexes: number[] = [];
	startIndexes: number[] = [];
	endIndexes: number[] = [];
	iterationCount: number = -1;

  	constructor() { }

  	binarySearch(array: number[], target: number): void {
		let start = 0;
		let end = array.length - 1;
		let mid;

		while (start <= end) {
			this.iterationCount++;

			mid = Math.floor((start + end) / 2);
			// Atualiza os vetores
			this.middleIndexes.push(mid);
			this.startIndexes.push(start);
			this.endIndexes.push(end);

			if (array[mid] > target) {
				end = mid - 1;
			} else if (array[mid] < target) {
				start = mid + 1;
			} else {
				return;
			}
		}
		return;
  	}

	restart(): void {
		this.middleIndexes = [];
		this.startIndexes = [];
		this.endIndexes = [];
		this.iterationCount = -1;
	}
}
