import { Component, OnInit } from '@angular/core';
import { ApiResponse, User, UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users: User[] = [];

  ngOnInit(): void {
    this.usersService.loadUsers().subscribe((val: ApiResponse) => {
      this.users = val.data;
    });
  }



}
