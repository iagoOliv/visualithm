import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BinarySearchService } from 'src/app/services/binary-search.service';

@Component({
    selector: 'app-binary-search',
    templateUrl: './binary-search.component.html',
    styleUrls: ['./binary-search.component.scss']
})

export class BinarySearchComponent {
    creating: boolean = false;
    array: number[] = [];
    components: any;
    startIteration: number = -1;
    endIteration: number = 0;

    constructor(private renderer: Renderer2, private binarySearchService: BinarySearchService) { }

    @ViewChild('_binarySearchArray', { static: true }) _binarySearchArray!: ElementRef
    async onCreate(target: string) {
        if (+target >= this.array.length) { return; }

        this.components = this._binarySearchArray.nativeElement.childNodes;
        this.binarySearchService.binarySearch(this.array, +target);
        this.endIteration = this.binarySearchService.iterationCount;

        // Histories
        const middleIndexesHistory = this.binarySearchService.middleIndexes;
        const startIndexesHistory = this.binarySearchService.startIndexes;
        const endIndexesHistory = this.binarySearchService.endIndexes;

        this.removeAllPositionalClasses();

        this.renderer.addClass(this.components[+target].children[0], 'target');
        this.stop(1000);
        this.renderer.removeClass(this.components[+target].childNodes[0], 'target');

        // Renderização dos Arrays
        for (let i = this.startIteration; i <= this.startIteration; i++) {
            let middle = middleIndexesHistory[i];
            let start = startIndexesHistory[i];
            let end = endIndexesHistory[i];
            
            this.removeFade();

            this.addPositionalClasses(start, middle, end);
            this.fadeToLeft(start);
            this.fadeToRight(end);

            await this.stop(1500);
        }
        this.binarySearchService.restart();
        this.creating = false;
    }

    addIterator() {
        // Não funciona
        if (this.startIteration >= this.endIteration) {
            return;
        }
        this.startIteration++; 
        this.onCreate("20");
    }

    subtractIterator() {
        this.startIteration--;
        this.onCreate("20");
    }

    // FUNÇÕES REUTILIZÁVEIS PARA MELHOR LEITURA

    fadeToLeft(start: number) {
        for(let i = 0; i < start; i++) {
            this.renderer.addClass(this.components[i].children[0], 'faded');
        }
    }

    fadeToRight(end: number) {
        for(let i = end + 1; i < this.array.length; i++) {
            this.renderer.addClass(this.components[i].children[0], 'faded');
        }
    }

    removeFade() {
        for (let i = 0; i < this.array.length; i++) {
            this.renderer.removeClass(this.components[i].children[0], 'faded');
        }
    }

    addPositionalClasses(start: number, middle: number, end: number) {
        start == middle
            ? this.renderer.removeClass(this.components[start].children[0], "start")
            : this.renderer.addClass(this.components[start].children[0], "start")
        end == start
            ? this.renderer.removeClass(this.components[end].children[0], "end")
            : this.renderer.addClass(this.components[end].children[0], "end")

        this.renderer.addClass(this.components[middle].children[0], "middle");
    };

    removePositionalClasses(start: number, middle: number, end: number) {
        this.renderer.removeClass(this.components[start].children[0], "start");
        this.renderer.removeClass(this.components[end].children[0], "end");
        this.renderer.removeClass(this.components[middle].children[0], "middle");
    };

    removeAllPositionalClasses() {
        try {
            for (let i = 0; i < this.array.length; i++) {
                this.renderer.removeClass(this.components[i].children[0], "start");
                this.renderer.removeClass(this.components[i].children[0], "middle");
                this.renderer.removeClass(this.components[i].children[0], "end");
            }
        } catch {
            console.log("Couldn't remove this class");
        }
    }

    async createArray(inputValue: string) {
        this.array = [];
        for (let i = 0; i < +inputValue; i++) {
            this.array.push(i);
        }
    }

    // Cria uma promessa a ser resolvida.
    async stop(ms: number) {
        await new Promise(resolve => setTimeout(resolve, ms))
    }
}
