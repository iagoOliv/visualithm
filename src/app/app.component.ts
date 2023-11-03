import { Component } from '@angular/core';
import { BinarySearchDirective } from './algorithms/binary-search.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'visualithm';
  array: number[] = [];

  async createArray(inputValue: string) {
    this.array = [];
    for (let i = 0; i < +inputValue; i++) {
      this.array.push(i)
      await this.stop(0.01);
    } 
  }

  // Uma forma de trigar o BinarySearch é colocando numa função do escopo do elemento do Botão
  // Como passar os elementos?
  search(inputValue: string): void {
     new BinarySearchDirective();
  }

  // Cria uma promessa a ser resolvida.
  async stop(ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms))
}
}
