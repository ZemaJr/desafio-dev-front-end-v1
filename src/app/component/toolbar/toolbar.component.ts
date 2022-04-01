import { Component } from '@angular/core';

import { LoginService } from '../login/login.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(
    private loginService: LoginService,
    private appComponent: AppComponent
  ) {}

  removeStatusLogin(): void {
    localStorage.removeItem('Status-Login');
    this.loginService.menuBar = false;
    this.appComponent.ngOnInit();
  }
}
