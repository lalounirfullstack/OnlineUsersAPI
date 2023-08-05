import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/user.interface";
import {UsersService} from "../../services/users.service";

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

  //Delete Selected User
  async deleteUser(id:string) {
      alert('Are you sure you want to delete this User?');
      let response = await
        this.usersServices.delete(id);
        if(response){
          alert('User Deleted');
          this.router.navigate(['/home'])
        }

  }


}
