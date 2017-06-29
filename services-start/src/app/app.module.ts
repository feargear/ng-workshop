import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { LogService } from './log.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  // Provide the auth service across the whole application
  providers: [AuthService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
