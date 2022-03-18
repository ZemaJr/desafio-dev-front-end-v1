import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  title = 'desafio-dev-front-end-zema';
  menuBar: boolean = false;

  ngOnInit(): void {
    this.menuBar = false;
    if (this.getStatusLogin() != 'Logado') {
      this.router.navigate(['/login']);
    }
    this.statusToolbar();
  }

  setStatusLogin(statusLogin: string): void {
    localStorage.setItem('Status-Login', statusLogin);
    this.statusToolbar();
  }

  getStatusLogin(): string | null {
    return localStorage.getItem('Status-Login');
  }

  statusToolbar(): boolean {
    if (this.getStatusLogin() == 'Logado') {
      this.menuBar = true;
    }
    return this.menuBar;
  }

}
