import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    title = 'app-home';
    showComponent: boolean = false;

    showPopUpComponent(): void {
        this.showComponent = !this.showComponent;
    }
}
