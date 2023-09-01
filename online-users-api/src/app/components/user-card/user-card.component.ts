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
      title: 'Deseas Borrar al Usuario?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Usuario Borrado !',
          'Usuario ha borrado.',
          'success'
        ).then(()=>{
          //Refreshes page to simulate deletion.
          window.location.reload();
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelar',
          'Usuario no borrado :)',
          'warning'
        )
      }
    })
  }


}
