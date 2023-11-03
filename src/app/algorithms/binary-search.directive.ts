import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBinarySearch]'
})
export class BinarySearchDirective {

  /* 
  O botão de pesquisar deve trigar um Directive que recebe 2 parâmetros:
  O Array de Elementos e o número Target.
  */

  @Input() elements: number[] = [1, 2, 3, 4, 5, 6];
  @Input() target: number = 5;

  constructor() {
    this.search();
  }
  
  private search() {
    for (let i = 0; i < this.elements.length; i++) {

      let start = 0;
      let end = this.elements.length - 1;
      let middle = Math.round((start + end) / 2);

      // Para modificar o componente?:
      // this.element[middle].nativeElement.classList.add("green");

      console.log(`Target: ${this.target} | Middle: ${middle} | Start: ${start} | End: ${end}`);
    }
  }

}
