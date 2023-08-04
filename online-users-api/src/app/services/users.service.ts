import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //Inject HttpClient to call API
  httpClient = inject(HttpClient);

  //property to store URL
  private baseURL: string = 'https://peticiones.online/api/users/';

  constructor() {}

  //Method to getAll Users
  getAll(): Observable<any> {
    return this.httpClient.get<any>(this.baseURL);
  }

  //Method to getUserByID - Observable
}
