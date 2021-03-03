import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderDComponent } from './components/slider-derecho/slider-d/slider-d.component';
import { SliderIComponent } from './components/slider-izquierdo/slider-i/slider-i.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderDComponent,
    SliderIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
