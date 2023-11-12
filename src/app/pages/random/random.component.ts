import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { RandomService } from "../../services/random-service/random.service";

@Component({
  selector: 'app-random-service',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent {
  rendering: boolean = false;
  numbersArray: number[] = [];
  size: number = 20;

  constructor(private renderer: Renderer2, private randomService: RandomService) { }

  @ViewChild("iteration", {read: ElementRef}) iteration!: ElementRef
  @ViewChild("output", {read: ElementRef}) output!: ElementRef

  async render() {
    if (this.rendering) { return; }

    this.rendering = true;

    if (this.numbersArray.length != 0) {
      this.numbersArray = [];
    }

    this.numbersArray = this.randomService.generateNumbers(this.size);

    let audio: HTMLAudioElement;
    this.renderer.removeClass(this.output.nativeElement, "random__output--done");

    for (let i = 0; i < this.numbersArray.length; i++) {
      i == this.numbersArray.length - 1
        ? audio = new Audio("assets/finish.mp3")
        : audio = new Audio("assets/iteration.mp3");
      await audio.play()
      this.output.nativeElement.textContent = this.numbersArray[i];
      this.iteration.nativeElement.children[0].play();
      await this.stop(100 + (i * 20) - (i * 20 / this.numbersArray.length));
    }
    this.renderer.addClass(this.output.nativeElement, "random__output--done");
    this.rendering = false;

    console.log(this.numbersArray)
  }

  triggerSound():void {
    this.iteration.nativeElement.children[0].play();
    this.iteration.nativeElement.children[0].stop();
  }

  // Cria uma promessa a ser resolvida.
  async stop(ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms))
  }
}
