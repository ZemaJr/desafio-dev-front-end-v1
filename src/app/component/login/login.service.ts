import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  url: string = 'https://reqres.in/api/login';
  email: string = '';
  senha: string = '';

  fetchLogin(): Observable<any> {
    this.http
      .post(this.url, {
        email: this.email,
        password: this.senha,
      })
      .subscribe((respostaLogin) =>
        console.log('respostaLogin', respostaLogin)
      );

    return this.http.post(this.url, {
      email: this.email,
      password: this.senha,
    });
  }

  setLogin(emailFormControl: string, passwordFormControl: string) {
    this.email = emailFormControl;
    this.senha = passwordFormControl;
  }
}
