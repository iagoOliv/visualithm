import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ArrayCardComponent } from './components/array-card/array-card.component';
import { BinarySearchComponent } from './components/binary-search/binary-search.component';
import { HomeComponent } from './pages/home/home.component';
import { provideRouter } from '@angular/router';
import { ErrorLandingComponent } from './pages/error-landing/error-landing.component';
import { SoonLandingComponent } from './pages/soon-landing/soon-landing.component';
import { GoToButtonComponent } from './components/go-to-button/go-to-button.component';


@NgModule({
  declarations: [
    InputComponent,
    ArrayCardComponent,
    BinarySearchComponent,
    HomeComponent,
    ErrorLandingComponent,
    SoonLandingComponent,
    GoToButtonComponent
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
