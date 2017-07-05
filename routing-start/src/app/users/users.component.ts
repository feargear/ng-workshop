import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:{username:string, description:string}[];

  constructor(private uservice: UsersService) { }

  ngOnInit() {
    this.users = this.uservice.getUsers();
  }

}
