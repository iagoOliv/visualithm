import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sound-effect',
  templateUrl: './sound-effect.component.html',
  styleUrls: ['./sound-effect.component.scss']
})
export class SoundEffectComponent {
  @Input() category: string = "";
}
