import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:{username:string, description:string};

  constructor(private route: ActivatedRoute, private uservice: UsersService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const index = +params['id'];
      this.user = this.uservice.getUser(index);
    });
  }

}
