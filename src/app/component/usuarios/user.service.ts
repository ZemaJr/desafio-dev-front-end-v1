import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<any> {
    /*this.http
      .get('https://reqres.in/api/users')
      .subscribe((resposta) => console.log('resposta', resposta));*/

    return this.http.get('https://reqres.in/api/users');
  }
}
