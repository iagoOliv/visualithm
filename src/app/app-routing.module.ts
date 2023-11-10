import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinarySearchComponent } from './components/binary-search/binary-search.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorLandingComponent } from './pages/error-landing/error-landing.component';
import { SoonLandingComponent } from './pages/soon-landing/soon-landing.component';
import { GoToButtonComponent } from './components/go-to-button/go-to-button.component';

export const routes: Routes = [
  { path: 'binary-search', component: BinarySearchComponent},
  { path: 'soon', component: SoonLandingComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: ErrorLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }