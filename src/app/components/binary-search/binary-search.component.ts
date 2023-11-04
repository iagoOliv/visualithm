import { Component } from '@angular/core';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss']
})
export class BinarySearchComponent {
  array: number[] = [];

  async createArray(inputValue: string) {
    this.array = [];
    for (let i = 0; i < +inputValue; i++) {
      this.array.push(i)
      await this.stop(0.01);
    }
  }

  // Uma forma de trigar o BinarySearch é colocando numa função do escopo do elemento do app
  search() {
  }

  // Cria uma promessa a ser resolvida.
  async stop(ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms))
}
}
