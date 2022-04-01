import { Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements OnInit {
  menuBar: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnInit(): void {
    this.menuBar = false;
    if (this.getStatusLogin() != 'Logado') {
      this.router.navigate(['/login']);
    }
    this.menuBar = this.statusToolbar();
  }

  login(email: string, password: string): Observable<any> {
    const url = 'https://reqres.in/api/login';

    return this.http.post(url, {
      email: email,
      password: password,
    });
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
