import {Component, inject, Input} from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() userCard : User | any;

  oneUser !: User | any;
  usersServices: UsersService = inject(UsersService)

  //router To redirect to Home when User is deleted
  router = inject(Router);


  //Delete Selected User
  async deleteUser(id:string) {
      confirm('Are you sure you want to delete this User?');
      let response = await
        this.usersServices.delete(id);
        if(response){
          alert('User Deleted');
          this.router.navigate(['/home'])
        }

  }


}
