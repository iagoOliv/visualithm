import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss']
})
export class BinarySearchComponent {
  array: number[] = [];

  constructor(private renderer: Renderer2) {}

  @ViewChild('search', {static: true}) search!: ElementRef
  onCreate(): void {
    let childComponents = this.search.nativeElement.childNodes;
    let middle = 5;
    this.renderer.setStyle(childComponents[middle].children[0], 'backgroundColor', 'green')
  }

  async createArray(inputValue: string) {
    this.array = [];
    for (let i = 0; i < +inputValue; i++) {
      this.array.push(i)
      await this.stop(0.01);
    }
  }

  // Cria uma promessa a ser resolvida.
  async stop(ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms))
}
}
