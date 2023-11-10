import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BinarySearchService } from 'src/app/services/binary-search.service';


@Component({
    selector: 'app-binary-search',
    templateUrl: './binary-search.component.html',
    styleUrls: ['./binary-search.component.scss']
})
export class BinarySearchComponent {
    array: number[] = [];
    components: any; // Armazena elementos HTML

    // Injection de Classe Serviço, manipulação direta
    constructor(private renderer: Renderer2, private binarySearchService: BinarySearchService) { }

    @ViewChild('_binarySearchArray', { static: true }) _binarySearchArray!: ElementRef
    onCreate(target: string) {
        /* 
          O binarySearchService cria uma classe que cria um Array de Middles, Starts e Ends;
    
          Os Arrays podem ser usados como um histórico interativo no FrontEnd
    
          ```ts
          array = [1, 2, 3, 4, 5];
          target = 2
          
          middleIndexes: [3, 2]
          ```
        */

        if (+target >= this.array.length) { return; }

        this.components = this._binarySearchArray.nativeElement.childNodes; // Seleciona os filhos de array-card__wrapper 
        
        // Cleanup
        this.clearComponentClasses();

        const iteration = 0;

        this.binarySearchService.binarySearch(this.array, +target); // Roda a função da classe e cria o histórico;

        const middleIndexesHistory = this.binarySearchService.middleIndexes;
        const startIndexesHistory = this.binarySearchService.startIndexes;
        const endIndexesHistory = this.binarySearchService.endIndexes;

        // Renderização dos Arrays

        middleIndexesHistory.forEach(async (middleIndex) => {
            this.renderer.addClass(this.components[middleIndex].children[0], 'middle');
            await this.stop(500);
        })

        this.renderer.addClass(this.components[+target].children[0], 'target');

        console.log(this.components)

        // ! Remove:
        // ! A função pode ser um void porque já se conhece o +target;
        // const targetIndex = this.binarySearchService.binarySearch(this.array, +target) // (int target)
    }
    
    clearComponentClasses() {
        this.components.forEach((component: any) => {
            try {
                this.renderer.removeClass(component, "start");
                this.renderer.removeClass(component, "middle");
                this.renderer.removeClass(component, "end");
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
