import { Component, inject } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import { UsersfilterService } from 'src/app/services/usersfilter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //Empty User Array
  arrUsers: User[] = [];
  arrUsersFiltered: User[] = [];
  term: string = ''

  //Injectable Call Service to get User Data from API
  usersService = inject(UsersService);
  usersFilterService = inject(UsersfilterService);

  //After Page is loaded call getAll Method
  constructor() {
    this.getUsersPage(1);
    this.filtersSubscribe();
  }

  getUsersPage(page: number){
    this.usersService.getAll(page).subscribe((user) => {
      this.arrUsers = user.results;
      this.filterUsers();
    });
  }

  filtersSubscribe() {
    this.usersFilterService.searchTerm$.subscribe((term) => {
      this.term = term;
      this.filterUsers();
    })
  }

  filterUsers() {
    if (!this.term) {
      this.arrUsersFiltered = this.arrUsers;
      return;
    }

    //Normalizes String Special Characters Like accents. To avoid issues filtering users
    const terms = this.term.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(' ')

    this.arrUsersFiltered = this.arrUsers.filter(user => {
        const name = `${user.first_name} ${user.last_name}`.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return terms.every(term => name.includes(term))
    })
  }


}
