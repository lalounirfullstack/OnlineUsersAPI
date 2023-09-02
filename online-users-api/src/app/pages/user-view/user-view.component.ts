import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/user.interface";
import {UsersService} from "../../services/users.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  //Stores dynamic URL route
  activatedRoute = inject(ActivatedRoute);

  oneUser !: User | any;
  usersServices: UsersService = inject(UsersService)

  //router To redirect to Home when User is deleted
  router = inject(Router);

  //Executes after page is loaded
  ngOnInit() {
     //Subscribes to parameters and changes
    this.activatedRoute.params.subscribe((params: any)=>{
      //Stores clicked User
      let id : string = (params.iduser);
      // Fill in the User Data calling the Service
      // Inject User Service aboveq
      this.oneUser = this.usersServices.getByUserId(id).subscribe((response)=>{
        //Response stored into one User
        this.oneUser = response;
      });
    });
  }

  // Delete methos using Sweet2
  deleteUser(userId: string) {
  Swal.fire({
    title: '¿Deseas borrar el usuario?',
    icon: 'question',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if (result.value) {
      this.usersServices.delete(userId)
        .then(() => {
          Swal.fire(
            'Usuario borrado',
            'Usuario ha sido borrado!',
            'success'
          ).then(() => {
            this.router.navigate(['/home']);
          });
        })
        .catch(error => {
          console.error('Error deleting user:', error);
          Swal.fire(
            'Error',
            'Ocurrió un error al borrar el usuario',
            'error'
          );
        });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelado',
        'Usuario no borrado :(',
        'error'
      );
    }
  });
}
}
