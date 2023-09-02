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

  usersServices: UsersService = inject(UsersService)

  // Delete User Method  using SweetAlert2
  deleteUser(userId: string) {
    Swal.fire({
      title: 'Deseas Borrar al Usuario?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.value) {
        this.usersServices.delete(userId).then(() => {
          Swal.fire(
            'Usuario Borrado !',
            'Usuario ha sido borrado.',
            'success'
          ).then(() => {
            // Refreshes page to simulate deletion.
            window.location.reload();
          });
        }).catch((error) => {
          console.error("Error deleting user:", error);
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelar',
          'Usuario no borrado :)',
          'warning'
        );
      }
    });
  }
}
