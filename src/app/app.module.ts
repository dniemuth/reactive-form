import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component'; // <-- #1 import component

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule // <-- #2 add to Angular module imports
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent, // <-- #3 declare app component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
