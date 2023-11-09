import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BinarySearchService } from 'src/app/services/binary-search.service';


@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss']
})
export class BinarySearchComponent {
  array: number[] = [];

  constructor(private renderer: Renderer2, private binarySearchService: BinarySearchService) {}

  @ViewChild('search', {static: true}) search!: ElementRef
  onCreate(inputValue: string): void {
    let childComponents = this.search.nativeElement.childNodes;
    let middle = 5;
    this.renderer.setStyle(childComponents[middle].children[0], 'backgroundColor', 'green')

    console.log(this.binarySearchService.binarySearch(this.array, +inputValue))

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
