import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent {
    @Input() buttonText: string = "";
    @Input() buttonImage: string = "";
    @Input() goTo?: string = "";
    @Input() color?: string = "blue--600";
    protected readonly Input = Input;
}
