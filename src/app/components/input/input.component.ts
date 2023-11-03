import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() button_message: string = '';
  @Output() buttonClick = new EventEmitter<string>();

  onButtonClick(inputValue: string) {
    this.buttonClick.emit(inputValue);
  }
}
