import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ArrayCardComponent } from './components/array-card/array-card.component';
// import { BinarySearchDirective } from './algorithms/binary-search.directive';
import { BinarySearchComponent } from './components/binary-search/binary-search.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ArrayCardComponent,
    // BinarySearchDirective,
    BinarySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
