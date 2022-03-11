import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  urlRaiz: string = 'https://reqres.in/api/users?page=';
  pagina: number = 1;
  url: string = '';

  fetchUsers(nroDaPagina: number): Observable<any> {
    this.url = this.urlRaiz + nroDaPagina;
    // this.http
    //   .get(this.url)
    //   .subscribe((resposta) => console.log('resposta', resposta));
    return this.http.get(this.url);
  }

}
