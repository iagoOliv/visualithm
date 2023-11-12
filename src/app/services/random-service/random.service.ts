import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  constructor() { }

  generateNumbers(size: number) {
    let numbersArray: number[] = [];

    for (let i = 0; i < size; i++) {
      numbersArray.push(Math.round(Math.abs(Math.random()) * 100));
    }

    return numbersArray;
  }
}
