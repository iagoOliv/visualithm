// import { Directive, Input, Renderer2, RendererFactory2 } from '@angular/core';

// @Directive({
//   selector: '[appBinarySearch]'
// })
// export class BinarySearchDirective {

//   /*
//   O botão de pesquisar deve trigar um Directive que recebe 2 parâmetros:
//   O Array de Elementos e o número Target.
//   */

//   @Input() target: number = 2;

//   constructor(private renderer: Renderer2, private renderFactory: RendererFactory2) {
//     this.renderer = renderFactory.createRenderer(null, null);
//     this.search(); 
//   }

//   private search():void {
//     const elements = document.querySelectorAll(".array__card");
//     let start = 0;
//     let end = elements.length - 1;
//     let middle = Math.round((start + end) / 2);
    
//     this.renderer.addClass(elements[0], 'green');

//     for (let i = 0; i < elements.length; i++) {
      
//       if (this.target > middle) {
//         start = middle;
//         middle = Math.round((start + end) / 2);
//     } else if (this.target < middle) {
//         end = middle;
//         middle = Math.round((start + end) / 2);
//     } else {
//         return;
//     }
//       console.log(`Target: ${this.target} | Middle: ${middle} | Start: ${start} | End: ${end}`);
//     }
//   }

// }