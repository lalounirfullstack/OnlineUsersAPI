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
  getByUserId(id: string): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}${id}`);
  }

  //Delete User
  delete(id:string) : Promise<any>{
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseURL}${id}`))
  }
}
