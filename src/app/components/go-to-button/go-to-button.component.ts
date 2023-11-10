import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-go-to-button',
  templateUrl: './go-to-button.component.html',
  styleUrls: ['./go-to-button.component.scss']
})
export class GoToButtonComponent {
  @Input() goToThis: string = "";
}
