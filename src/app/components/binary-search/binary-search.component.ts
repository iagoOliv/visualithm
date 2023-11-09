import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BinarySearchService } from 'src/app/services/binary-search.service';


@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.scss']
})
export class BinarySearchComponent {
  array: number[] = [];

  // Como os serviços são injetáveis, a gente consegue injetar ele no constructor
  constructor(private renderer: Renderer2, private binarySearchService: BinarySearchService) {}

  @ViewChild('search', {static: true}) search!: ElementRef
  onCreate(target: string) {
    // Seleciona os filhos da div array-card__wrapper 
    const childComponents = this.search.nativeElement.childNodes;

    // Pega o resultado da função busca binária do serviço enviando o vetor abstrato e o target escrito pelo usuário no input que é recebido como parâmetro pela função 
    // O + antes do target é pra transformar de string para inteiro
    const targetIndex = this.binarySearchService.binarySearch(this.array, +target)

    // Pega o atributo dos índices do meio pelo service da busca
    const middleIndexes = this.binarySearchService.middleIndexes

    // Para cada um dos índices do meio ele pinta o background do componente de verde
    // Aliás, acho que a gente deveria setar classes ao invés de declarar o estilo do background aqui 
    middleIndexes.forEach((middleIndex) => {
      this.renderer.setStyle(childComponents[middleIndex].children[0], 'backgroundColor', 'green')
    })

    // Pinta o background no índice do target
    this.renderer.setStyle(childComponents[targetIndex].children[0], 'backgroundColor', 'red')

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
