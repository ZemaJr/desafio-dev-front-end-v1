import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface User {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export interface Support {
	url: string;
	text: string;
}

export interface ApiResponse {
	page: number;
	per_page: number;
	total: number;
	total_pages: number;
	data: User[];
	support: Support;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  loadUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>('https://reqres.in/api/users');
  }

}
