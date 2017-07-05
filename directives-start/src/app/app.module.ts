import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HoverToggleClassDirective } from './hover-toggle-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverToggleClassDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
