import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  constructor(private http: HttpClient) { }

  // isLoggedIn: boolean = false;
  // url: string = 'https://reqres.in/api/login';
  
  login(email: string, password: string): Observable<any> {
    const url = 'https://reqres.in/api/login';
    // this.http
    //   .post(this.url, {
    //     email: email,
    //     password: password,
    //   })
    //   .subscribe((respostaLogin) =>
    //     console.log('respostaLogin', respostaLogin)
    //   );
    return this.http.post(url, {
      email: email,
      password: password,
    });
    
  }

  // login(email: string, password: string): Observable<LoginReponse> {
  //   return this.http.post<LoginReponse>(this.url, {
  //     email,
  //     password,
  //   });
  // }
  
}

// interface LoginReponse {
//   token: string;
// }
