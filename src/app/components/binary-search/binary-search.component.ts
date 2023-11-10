import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BinarySearchService } from 'src/app/services/binary-search.service';


@Component({
    selector: 'app-binary-search',
    templateUrl: './binary-search.component.html',
    styleUrls: ['./binary-search.component.scss']
})

export class BinarySearchComponent {
    array: number[] = [];
    components: any;

    constructor(private renderer: Renderer2, private binarySearchService: BinarySearchService) { }

    @ViewChild('_binarySearchArray', { static: true }) _binarySearchArray!: ElementRef
    async onCreate(target: string) {
        if (+target >= this.array.length) { return; }

        this.components = this._binarySearchArray.nativeElement.childNodes; // Seleciona os filhos de array-card__wrapper
        this.binarySearchService.binarySearch(this.array, +target);

        const middleIndexesHistory = this.binarySearchService.middleIndexes;
        const startIndexesHistory = this.binarySearchService.startIndexes;
        const endIndexesHistory = this.binarySearchService.endIndexes;

        let currentMiddleIndex: number;
        let currentStartIndex: number;
        let currentEndIndex: number;

        this.renderer.addClass(this.components[+target].children[0], 'target');
        this.stop(1000);

        // Renderização dos Arrays
        for (let i = 0; i <= this.binarySearchService.iterationCount; i++) {
            // Definição
            currentMiddleIndex = middleIndexesHistory[i];
            currentStartIndex = startIndexesHistory[i];
            currentEndIndex = endIndexesHistory[i];

            // Adicionar
            this.renderer.addClass(this.components[currentStartIndex].children[0], 'start');
            this.renderer.addClass(this.components[currentEndIndex].children[0], 'end');
            this.renderer.addClass(this.components[currentMiddleIndex].children[0], 'middle');

            // Se for a ultima iteração, não remover
            if (i == this.binarySearchService.iterationCount) { break; }

            // Parar
            await this.stop(1000);

            // Limpar
            this.renderer.removeClass(this.components[currentMiddleIndex].children[0], 'middle');
            this.renderer.removeClass(this.components[currentEndIndex].children[0], 'end'); 
            this.renderer.removeClass(this.components[currentStartIndex].children[0], 'start');
        }

        this.renderer.removeClass(this.components[+target].children[0], 'target');
        this.binarySearchService.restart();
    }
    
    clearComponentClasses() {
        this.components.forEach((component: any) => {
            try {
                this.renderer.removeClass(component.children[0], "start");
                this.renderer.removeClass(component.children[0], "middle");
                this.renderer.removeClass(component.children[0], "end");
            } catch (e) {
                console.log("No property 'start/middle/end' detected")
            }
        });
    }

    async createArray(inputValue: string) {
        this.array = [];
        for (let i = 0; i < +inputValue; i++) {
            this.array.push(i)
            await this.stop(0.001);
        }
    }

    // Cria uma promessa a ser resolvida.
    async stop(ms: number) {
        await new Promise(resolve => setTimeout(resolve, ms))
    }
}
