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
      // Inject User Service above
      this.oneUser = this.usersServices.getByUserId(id).subscribe((response)=>{
        //Response stored into one User
        this.oneUser = response;
      });
    });
  }

  deleteUser(userId:string){
    Swal.fire({
      title: 'Are you sure want to delete this User?',
      /*text: 'You will not be able to recover this file!',*/
      icon: 'warning',
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
          this.router.navigate(['/home'])
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'User not deleted :)',
          'error'
        )
      }
    })
  }
}
