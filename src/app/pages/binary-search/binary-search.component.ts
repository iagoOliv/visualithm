import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BinarySearchService } from 'src/app/services/binary-search-service/binary-search.service';

@Component({
    selector: 'app-binary-search',
    templateUrl: './binary-search.component.html',
    styleUrls: ['./binary-search.component.scss']
})

export class BinarySearchComponent {
    components: any;
    array: number[] = [];
    currentIteration: number = 0;
    limitIteration: number = 0;
    inputTarget: number = 0;

    constructor(private renderer: Renderer2, private binarySearchService: BinarySearchService) { }

    @ViewChild('_binarySearchArray', { static: true }) _binarySearchArray!: ElementRef;
    @ViewChild('_iterator', { static: true }) _iterator!: ElementRef;

    // Anteriormente essa função resetava o Binary Search
    // toda vez que era chamada, criando baixa performance.
    async onCreate() {
        if ((this.inputTarget >= this.array.length)) { return; }

        // Modifica o texto do _iterator no DOM
        this._iterator.nativeElement.textContent = this.currentIteration;

        // Inicialização
        this.components = this._binarySearchArray.nativeElement.childNodes;
        this.limitIteration = this.binarySearchService.iterationCount;

        // Históricos
        const middleIndexesHistory = this.binarySearchService.middleIndexes;
        const startIndexesHistory = this.binarySearchService.startIndexes;
        const endIndexesHistory = this.binarySearchService.endIndexes;

        console.log(`Current Iteration: ${this.currentIteration} // Limit Iteration: ${this.limitIteration}`)
        console.log(`Middle Index History: ${middleIndexesHistory} // Start Index History: ${startIndexesHistory} // End Index History: ${endIndexesHistory}`);

        // Renderização dos Arrays
        for (let i = this.currentIteration; i <= this.currentIteration; i++) {
            let middle = middleIndexesHistory[i];
            let start = startIndexesHistory[i];
            let end = endIndexesHistory[i];

            this.removeFade();

            this.addPositionalClasses(start, middle, end);
            this.fadeToLeft(start);
            this.fadeToRight(end);
        }
    }

    // Change Target reseta o Serviço Binary Search e remove todas as classes anteriormente criadas;
    changeTarget($event: string) {
        this.inputTarget = +$event;

        this.binarySearchService.restart();
        this.binarySearchService.binarySearch(this.array, this.inputTarget);

        this.resetIteratorsTimeline();
        this.removeFade();
        this.removeAllPositionalClasses();

        this.onCreate();
    }

    goForward() {
        if (this.currentIteration >= this.limitIteration - 1) { return; }
        this.currentIteration += 1;
        this.onCreate();
    }

    goBack() {
        if (this.currentIteration < 1) { return; }
        this.currentIteration -= 1;
        this.removeFade();
        this.removeAllPositionalClasses();
        this.onCreate();
    }

    /*
        || Funções de Manipulação do DOM
    */
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
            try {
                this.renderer.removeClass(this.components[i].children[0], 'faded');
            } catch (e) {
                console.log("This element doesn't have the 'faded' class.");
            }
        }
    }

    addPositionalClasses(start: number, middle: number, end: number) {
        try {
        start == middle
            ? this.renderer.removeClass(this.components[start].children[0], "start")
            : this.renderer.addClass(this.components[start].children[0], "start")
        end == start
            ? this.renderer.removeClass(this.components[end].children[0], "end")
            : this.renderer.addClass(this.components[end].children[0], "end")

        this.renderer.addClass(this.components[middle].children[0], "middle");
        } catch (e) {
            console.log("Couldn't add this class. ", e)
        }

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

    resetIteratorsTimeline() {
        this.currentIteration = 0;
    }

    async createArray(inputValue: string) {
        this.array = [];
        this.resetIteratorsTimeline();
        this.removeAllPositionalClasses();
        for (let i = 0; i < +inputValue; i++) {
            this.array.push(i);
        }
    }

    // Cria uma promessa a ser resolvida.
    async stop(ms: number) {
        await new Promise(resolve => setTimeout(resolve, ms))
    }
}
