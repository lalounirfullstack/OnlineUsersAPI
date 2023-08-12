import {Component, inject, Input} from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import {UsersService} from "../../services/users.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() userCard : User | any;

  oneUser !: User | any;
  usersServices: UsersService = inject(UsersService)

    //Delete User using SweetAlert2
    deleteUser(userId:string){
    Swal.fire({
      title: 'Are you sure want to delete this User?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        ).then(()=>{
          //Refreshes page to simulate deletion.
          window.location.reload();
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'User not deleted :)',
          'warning'
        )
      }
    })
  }


}
