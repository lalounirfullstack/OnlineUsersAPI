import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersfilterService {
  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchTerm$: Observable<string> = this.searchTermSubject.asObservable();

  //Used to filter user dynamically upon user entry
  setSearchTerm(searchTerm: string) {
    this.searchTermSubject.next(searchTerm);
  }
}
