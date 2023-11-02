import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'visualithm';

  createArray(): void {
    console.log("criando array");
  }

  search(): void {
    console.log("pesquisando...");
  }
}
