import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Inject the router here. Angular knows where to find it
   * if we have imported the RouterModule in our AppModule
   */

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigateToUsers(){
    /**
     * Also sets a fragment #elamaonlaiffii for the url for fun. 
     * It does not do anything though but we could implement a 
     * 'scroll down' behavior if we wanted to use fragments
     */
    this.router.navigate(['users'], {fragment: 'elamaonlaiffii'});
  }

}
