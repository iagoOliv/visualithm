import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
    selector: '[setBackground]'
})

export class SetBackground implements OnInit {
    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = 'yellow'
    }
}