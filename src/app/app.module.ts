import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputComponent } from './components/input/input.component';
import { ArrayCardComponent } from './components/array-card/array-card.component';
import { BinarySearchComponent } from './pages/binary-search/binary-search.component';
import { HomeComponent } from './pages/home/home.component';
import { provideRouter } from '@angular/router';
import { ErrorLandingComponent } from './pages/error-landing/error-landing.component';
import { SoonLandingComponent } from './pages/soon-landing/soon-landing.component';
import { GoToButtonComponent } from './components/go-to-button/go-to-button.component';
import { RandomComponent } from './pages/random/random.component';
import { SoundEffectComponent } from './components/sound-effect/sound-effect.component';
import { ButtonIconComponent } from './components/button/button-icon.component';
import { CopyrightComponent } from './components/copyright/copyright.component';


@NgModule({
  declarations: [
    InputComponent,
    ArrayCardComponent,
    BinarySearchComponent,
    HomeComponent,
    ErrorLandingComponent,
    SoonLandingComponent,
    GoToButtonComponent,
    RandomComponent,
    SoundEffectComponent,
    ButtonIconComponent,
    CopyrightComponent,
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideRouter(routes)]
})
export class AppModule { }

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
