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
  private baseURL: string = 'https://peticiones.online/api/users';

  constructor() {}

  //Method to getAll Users
  getAll(page = 1): Observable<any> {
    return this.httpClient.get<any>(this.baseURL + '?page=' + page);
  }

  //Method to getUserByID - Observable
  getByUserId(id: string): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

    //Only Use with Promise//Use by Update
  getbyIdPromise(id:string) :Promise<User>{
    return lastValueFrom(this.httpClient.get<User>(`${this.baseURL}/${id}`))
  }

  //Delete User
  delete(id:string) : Promise<any>{
    return lastValueFrom(this.httpClient.delete<any>(`${this.baseURL}/${id}`))
  }

  //Insert User
      insert(formValue:any): Promise<User>{
      //We need to send a Route and what need to insert or update.
      //First Parameter: URL
      return lastValueFrom(this.httpClient.post<User>(this.baseURL, formValue))

    }
  //Update User
  update(formValue: User): Promise<User>{
    return lastValueFrom(this.httpClient.put<User>(`${this.baseURL}/${formValue.id}`,formValue))
  }

}
