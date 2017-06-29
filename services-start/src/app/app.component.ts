import { Component, Input } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  username = '';
  password = '';

  /**
   * Dependency injection, angular will try to provide this service
   * if it was specified in the 'providers' of the app.module
   * 
   * @param authService
   */
  constructor(private authService: AuthService){

  }

  onAuthenticate(){
    console.log("Username: " + this.username)
    this.isLoggedIn = this.authService.authenticate(this.username, this.password);
  }

  onLogout(){
    this.isLoggedIn = this.authService.logout();
  }
}
