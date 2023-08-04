import { Component, inject } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //Empty User Array
  arrUsers: User[] = [];

  //Injectable Call Service to get User Data from API
  usersService = inject(UsersService);
  //After Page is loaded call getAll Method
  ngOnInit() {
    this.usersService.getAll().subscribe((user) => {
      this.arrUsers = user.results;
    });
  }
}
