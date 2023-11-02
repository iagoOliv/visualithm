import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'visualithm';
  array: number[] = [];

  createArray(inputValue: string): void {
    for (let i = 0; i < +inputValue; i++) {
      this.array.push(i)
    } 

    console.log("criando vetor");
    
  }

  search(inputValue: string): void {
    console.log("pesquisando..." + inputValue);
  }
}
