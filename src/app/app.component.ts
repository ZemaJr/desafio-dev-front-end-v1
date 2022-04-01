import { Component, OnInit } from '@angular/core';

import { LoginService } from './component/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  title = 'desafio-dev-front-end-zema';
  menuBar: boolean = false;

  ngOnInit(): void {
    this.menuBar = this.loginService.statusToolbar();
  }
}
