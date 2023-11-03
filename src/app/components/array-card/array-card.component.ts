import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-array-card',
  templateUrl: './array-card.component.html',
  styleUrls: ['./array-card.component.scss']
})
export class ArrayCardComponent {
  @Input() item!: number;
}
