import { Component, OnInit } from '@angular/core';

import { LoginService } from './../login/login.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.loginService.ngOnInit();
    this.appComponent.ngOnInit();
  }
}
